import os
import speech_recognition as sr
from tkinter import *
from tkinter.filedialog import askdirectory
import time
import threading

class Video(object):
    def __init__(self,path):
        self.path = path

    def play(self):
        from os import startfile
        os.startfile(self.path)

class Movie_MP4(Video):
    type = "MP4"

I = "I.mp4"
love = "I.mp4"
def movie(movie_list):
    for word in movie_list:
        movie = Movie_MP4(word)
    #if raw_input("Press enter to play, anything else to exit") == '':
        movie.play()




root=Tk()
root.minsize(300,300)

label=Label(root,text="Audio Rcognition",font='Helvetica 18 bold')
label.pack()

labelListen=Label(root,text="Press to Listen")

def callReconiger():
    textarea.delete('1.0', END)
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("say something")
        audio = r.listen(source)

    try:
        #print('program thinks you said:\n ' + r.recognize_google(audio))
        output = r.recognize_google(audio)

    except:
        labelListen.config(text="Press to Listen")
    movie_list = output.split()
    labelListen.config(text="Press to Listen")
    textarea.insert(INSERT,' '.join(movie_list))

    #movie = Movie_MP4(a)
    # if raw_input("Press enter to play, anything else to exit") == '':
    #movie.play()
    movie(movie_list)


def callback():
    labelListen.config(text="Listening....")
    try:
        t = threading.Thread(target=callReconiger)
        t.start()
    except:
        pass




photo=PhotoImage(file='listen.png')
listenButton = Button(root, text="Listen", image=photo, command=callback, height=50, width=50)
listenButton.pack()
labelListen.pack()
textarea = Text(root, height=2, width=30)
textarea.pack()
root.mainloop()

