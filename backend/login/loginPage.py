import os
from flask import Flask,render_template,request
from flask_cors import CORS

template_dir =  os.path.abspath('/home/bibhu/E/Virtual_Interview/frontend/login-form/public')

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_ALLOW_HEADER'] = 'Content-Type'
app.config['supports_credentials']='true'
@app.route('/', methods=['POST'])
def hello_world():
    return ("Hi")

@app.route('/login', methods=['POST'])
def login():
    content = request.get_json()
    print (content)
    return 'Authenticated'
   

if __name__ == '__main__':
   app.run()
