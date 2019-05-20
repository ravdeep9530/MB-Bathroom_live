BEGIN

DECLARE due_date VARCHAR(50);
DECLARE created_date DATETIME;
DECLARE no_installments INT;
DECLARE loan_id INT;
DECLARE i INT;
DECLARE j INT;

DECLARE exit_loop BOOLEAN;
DECLARE cur CURSOR FOR SELECT l.due_date,l.created_date,l.loan_id,l.installment_number from LOANS l;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET exit_loop = TRUE;
OPEN cur;
FETCH cur INTO due_date,created_date,loan_id,no_installments;
start_loop: LOOP
BEGIN
DECLARE deposit_date1 DATETIME;
DECLARE upto_amt DOUBLE;
DECLARE n INT;
DECLARE curDate DATE;
SET deposit_date1=(SELECT i.installment_deposit_date from INSTALLMENTS i WHERE i.loan_id=loan_id ORDER BY i.installment_deposit_date DESC LIMIT 1);


SET curDate=CAST(NOW() AS DATE);


SET n=DATEDIFF(curDate,cast(STR_TO_DATE(due_date, '%m-%d-%Y') AS DATE));
SELECT n,date_format(cast(STR_TO_DATE(due_date, '%m-%d-%Y') AS DATE),'%m%Y'),cast(STR_TO_DATE(due_date, '%m-%d-%Y') AS DATE)
,date_format(curDate,'%m%Y');
SET i=0;
SET j=0;
WHILE(j=0) DO
	if cast(STR_TO_DATE(due_date, '%m-%d-%Y') AS DATE)<=curDate THEN
    BEGIN
    	SET due_date=DATE_ADD(cast(STR_TO_DATE(due_date, '%m-%d-%Y') AS DATE),INTERVAL 1 MONTH);
        SET i=i+1;
        SELECT due_date,curDate;

    END;
    ELSEif cast(STR_TO_DATE(due_date, '%m-%d-%Y') AS DATE)>curDate THEN

    BEGIN
    	SET j=1;
        SELECT due_date,curDate;
       END;
    END if;
END WHILE;
SELECT i;
FETCH cur INTO due_date,created_date,loan_id,no_installments;
IF exit_loop THEN
	LEAVE start_loop;
end IF;
END;
END LOOP start_loop;
CLOSE cur;
END