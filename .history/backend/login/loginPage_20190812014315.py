import os
from flask import Flask,render_template
template_dir =  os.path.abspath('/home/bibhu/E/Virtual_Interview/frontend/login-form/public')

app = Flask(__name__,template_folder=template_dir)
@app.route('/', methods=['GET', 'POST'])
def hello_world():
    return ("Hi")

@app.route('/login', methods=['GET', 'POST'])
def login():
    return "Login"

if __name__ == '__main__':
   app.run()
