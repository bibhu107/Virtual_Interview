import os
from flask import Flask,render_template
template_dir =  os.path.abspath('/home/bibhu/E/Virtual_Interview/frontend/login-form/public')

app = Flask(__name__,template_folder=template_dir)
@app.route('/')
def hello_world():
	 return render_template('index.html')

if __name__ == '__main__':
   app.run()
