from flask import Flask, render_template, jsonify,request
from flask_sqlalchemy import SQLAlchemy
import numpy as np 
import os
import pickle

app = Flask(__name__)


@app.route('/')
def form():
    return render_template('index.html')
 
 
@app.route("/api/<r1>/<r2>/<r3>/<r4>/<r5>/<r6>/<r7>/<r8>")
def predictor(r1,r2,r3,r4,r5,r6,r7,r8):
    X = list(map(int,[r1,r2,r3,r4,r5,r6,r7,r8]))
    yourX = np.array(X).reshape(1,-1)
    classifier = pickle.load(open('finalized_model.sav', 'rb'))
    predictions = classifier.predict(yourX)
    d = {'prediction':predictions[0]}
    return jsonify(d)

app.run(host='localhost', port=5000)

if __name__ == '__main__':
    app.debug = True
    app.run()