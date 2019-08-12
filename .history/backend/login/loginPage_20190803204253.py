import os
from flask import Flask

app = Flask(__name__)
template_dir =  os.path.abspath('/home/bibhu/E/Virtual_Interview/frontend/login-form/public')
@app.route('/',template_folder=template_dir)
def hello_world():
	return "hi"
 

if __name__ == '__main__':
   app.run()
