#!/usr/bin/python
# -*- coding: utf-8 -*-
from sqlConn import con
import requests
import threading




#conv
def getResult(q):
    cur=con.cursor()
    cur.execute(q)
    #rs=cur.fetchall()
    #result=dict(cur)
    #rs=dictfetchall(cur)
    row = cur.fetchone()
    while row is not None:
        #utf8 =  urllib.parse.urlencode(str(row[2]))




        #print(row[0],utf8)
        #url='http://158.69.130.136:9091/SMSPANELAPI?username=demo11&pwd=1234567&msisdn='+row[3]+'&msg='+row[2]+'&senderid=SCHOOL&coding=2';
       # url='http://api.msg91.com/api/sendhttp.php?sender=SUSPSC&route=4&mobiles='+row[3]+'&authkey=211898A9F5Wa9O5ade1e79&country=91&message='+row[2]+'&unicode=1'
        #print(url)
     #   r = requests.get(url)
      #  print(r.text)
        if str(r.status_code)=='200':
            c = con.cursor()
            #print("CALL updateMessageQueue('" + str(row[0]) + "');")
            c.callproc("updateMessageQueue", [row[0],str(r.text)])
            c.close()
        row = cur.fetchone()

   # with open('music1.json', 'w') as f:
    #    json.dump(rs,f,cls=DatetimeEncoder)

    #for r in cur:
     #   print(r)

    cur.close()
    con.commit()
    con.close()


def getFirstPage():

    getResult("CALL `getSendMessage`()")

threading.Thread(target=getFirstPage).start()
