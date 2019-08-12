import os
from flask import Flask,render_template


@app.route('/api/helloWorld', methods=['GET', 'POST'])
def hello_world():
    return "hi"

if __name__ == '__main__':
   app.run()
