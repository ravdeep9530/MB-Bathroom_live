from sqlConn import con
import json
import itertools
try:
    from itertools import izip
except ImportError:  #python3.x
    izip = zip
class DatetimeEncoder(json.JSONEncoder):
    def default(self, obj):
        try:
            return super(DatetimeEncoder, obj).default(obj)
        except TypeError:
            return str(obj)
#covert to directory
def dictfetchall(cursor):
    """Returns all rows from a cursor as a list of dicts"""
    desc = cursor.description
    return [dict(izip([col[0] for col in desc], row))
            for row in cursor.fetchall()]
#conv
def getResult(q):
    cur=con.cursor()
    cur.execute(q)
    #rs=cur.fetchall()
    #result=dict(cur)
    rs=dictfetchall(cur)
    print(rs)
    with open('music1.json', 'w') as f:
        json.dump(rs,f,cls=DatetimeEncoder)

    #for r in cur:
     #   print(r)
    cur.close()
    con.close()

def getFirstPage():

    getResult("SELECT * from TAGS t INNER join TRACK_TAGS tt inner join TRACKS tr on tt.track_id=tr.track_id inner join TRACKS_LINK tl on tr.track_id=tl.track_id  where INSTR(tt.tags ,t.tag_name) and t.isActive=1 and tr.isActive=1 ORDER BY t.tag_name,tt.tempo,tt.beat ")
getFirstPage()