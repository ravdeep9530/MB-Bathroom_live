#!/usr/bin/python3

import pymysql
import xml.sax
con=pymysql.connect('94.156.144.217','hotel',
    'indian12',
    'hotels',charset='utf8',
   use_unicode=True
)
#class MovieHandler( xml.sax.ContentHandler ):
 #  def __init__(self):
  #    self.host = ""
  #    self.username = ""
   #   self.password = ""
    #  self.database = ""
     # self.charset = ""


# create an XMLReader
 #parser = xml.sax.make_parser()
# turn off namepsaces
#parser.setFeature(xml.sax.handler.feature_namespaces, 0)

# override the default ContextHandler
#Handler = MovieHandler()
#parser.setContentHandler(Handler)

#parser.parse("./config.xml")# create an XMLReader
#parser = xml.sax.make_parser()
   # turn off namepsaces
#parser.setFeature(xml.sax.handler.feature_namespaces, 0)

   # override the default ContextHandler
#Handler = MovieHandler()
#parser.setContentHandler( Handler )

#parser.parse("./config.xml")