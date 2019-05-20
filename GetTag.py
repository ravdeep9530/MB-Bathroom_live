from mutagen.easyid3 import EasyID3
from glob import glob
import os

filename = './Agar Tum Saath Ho-Maahi Ve - DJMaza.Life - 320Kbps.mp3'

# Example which shows how to automatically add tags to an MP3 using EasyID3
for files in os.listdir('./'):
    if files.endswith(".mp3"):
        for filename in glob(files):
            try:
                mp3info = EasyID3(files)
               # print(mp3info.getAll())
                print(mp3info.items(),"\n\n")
            except Exception as e:
                pass

def getEyeD3Tags(path):
    """"""
    trackInfo = eyed3.Mp3AudioFile(path)
    tag = trackInfo.getTag()
    tag.link(path)

    print("Artist: %s"+tag.getArtist())
    print ("Album: %s"+tag.getAlbum())
    print ("Track: %s"+tag.getTitle())
    print ("Track Length: %s"+trackInfo.getPlayTimeString())
    print ("Release Year: %s"+tag.getYear())
