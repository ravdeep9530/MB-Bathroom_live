import sched, time
import os
import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from sqlConn import con
import asyncio
import pymysql

email_template = []


def send_report(filename=""):

    server = None

    # Send the mail
    if email_template.__len__() > 0:
        try:
            print(email_template[0][1])
            server = smtplib.SMTP(email_template[0][4], email_template[0][5],None, 30)
            #try:
             #   server.connect(email_template[0][4], email_template[0][5],None, 30)
            #except smtplib.SMTPAuthenticationError as e:
             #   print(str(e))
            #print(email_template[0][1])

            import traceback
            traceback.print_exc()
            #server.connect()


            server.starttls()
            # Next, log in to the server
            server.login(email_template[0][1], email_template[0][2])

            msg = MIMEMultipart()
            msg['From'] = "ravdeeps3@gmail.com"
            msg['To'] = email_template[0][9]
            msg['Subject'] = email_template[0][6]
            body = email_template[0][7]
            msg.attach(MIMEText(body, 'plain'))
            attachment = ""

            if email_template[0][8] == 1:
                part = MIMEBase('application', 'octet-stream')
                try:
                    attachment = open("./" + filename, "rb")
                except Exception as ee:
                    print("" + str(ee))
                if attachment != "":
                    part.set_payload((attachment).read())
                    encoders.encode_base64(part)
                    part.add_header('Content-Disposition', "attachment; filename= %s" % filename)
                    msg.attach(part)
            text = msg.as_string()

            server.sendmail("ravdeeps3@gmail.com",email_template[0][9].split(','), text)

            print('sent' + str(email_template[0][10]) + str('1'))
            getResult("UPDATE EMAIL_HISTORY SET status=1 WHERE history_id=" + str(email_template[0][10]));	
        except pymysql.InternalError as e:
            print ('SMTP Exception:' + str(e))
            getResult("INSERT INTO `JOB_ERROR`(`job_id`, `error_description`) VALUES (1,'SMTP Exception:" + str(e)+"')")
        except smtplib.SMTPException as e:
            print ('SMTP Exception:' + str(e))
            import traceback
            traceback.print_exc()
        except Exception as e:
            print ('SMTP Exception:' + str(e))
            import traceback
            traceback.print_exc()
            # c = con.cursor()
            # print("CALL updateMessageQueue('" + str(row[0]) + "');")
            # c.callproc("updateEmailHistory", [int(email_template[0][10]),int('2')])

            # c.close()


def getResult(q):
    cur = con.cursor()
    cur.execute(q)
    del email_template[:]
    row = cur.fetchone()
    while row is not None:
        email_template.append(row)
        #print(email_template)

        row = cur.fetchone()

    # with open('music1.json', 'w') as f:
    #    json.dump(rs,f,cls=DatetimeEncoder)

    # for r in cur:
    #   print(r)
    con.commit()
    cur.close()
    # con.close()

    return 1


async def check_pending_notifications():
    try:
        getResult("CALL `getEmailTemplate`();")
        filename=""
        if email_template[0][8] == 1:
            filename = getFilename(email_template[0][11])
        send_report(filename)
        pass
    except Exception as e:
        print("No Email is Pending." + str(e))
        if str(e).__contains__("index out")!=1:
            getResult("INSERT INTO `JOB_ERROR`(`job_id`, `error_description`) VALUES (1,'SMTP Exception:" + str(e) + "')")


s = sched.scheduler(time.time, time.sleep)


def getFilename(url):
    today = datetime.date.today()
    # print today
    os.system("wkhtmltopdf " + url + " HMS_" + str(today) + ".pdf")
    # do your stuff
    fname = "HMS_" + str(today) + ".pdf"
    return fname


def do_something(sc):
    loop = asyncio.get_event_loop()
    loop.run_until_complete(check_pending_notifications())

    s.enter(10, 1, do_something, (sc,))


s.enter(1, 1, do_something, (s,))
s.run()
