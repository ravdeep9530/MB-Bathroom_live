import os
import pygame
from tkinter import *
from tkinter.filedialog import askdirectory
from mutagen.id3 import ID3

root=Tk()
root.minsize(300,300)
index=0
tracksoflist=[]
realnames=[]
var=StringVar()
def loadmusic():
    pygame.mixer.music.load(tracksoflist[index%len(tracksoflist)])
    pygame.mixer.music.play()
    pass

def directorySelect():
    dir=askdirectory()
    os.chdir(dir)

    for files in os.listdir(dir):
        if files.endswith(".mp3"):
            #realdir=os.path.realpath(files)
            #audio=ID3(realdir)
            tracksoflist.append(files)
            #realnames.append(audio['TIT2'].text[0])
            print(files)
    pygame.mixer.init()
    #print(tracksoflist[0])
    #pygame.mixer.music.load(tracksoflist[0])
    #pygame.mixer.music.play()
    loadmusic()

directorySelect()
label=Label(root,text="Music Player")
label.pack()
listbox=Listbox(root)
listbox.pack()
print(tracksoflist)
i=len(tracksoflist)
for t in tracksoflist:
    listbox.insert(0,str(i)+"-"+t)
    i-=1
nextButton=Button(root,text="Next")
nextButton.pack()
preButton=Button(root,text="Previous")
preButton.pack()
stopButton=Button(root,text="Stop")
stopButton.pack()
songlabel=Label(root,textvariable=var)

def updateText():
    print(tracksoflist[index%len(tracksoflist)])
    var.set(tracksoflist[index%len(tracksoflist)])


def nextsong(e):
    global index
    index+=1
    print(index)
    loadmusic()
    updateText()
def previous(e):
    global index
    index-=1
    loadmusic()
    updateText()
def stop(e):
    pygame.mixer.music.stop()
nextButton.bind("<Button-1>",nextsong)
preButton.bind("<Button-1>",previous)
stopButton.bind("<Button-1>",stop)

songlabel.pack()

root.mainloop()
