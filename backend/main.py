from flask import Flask, request
from flask_cors import CORS
from insert_data import getdata_sqm,getdata_nqm

app = Flask(__name__)

CORS(app, resources={r"/getdata_sqm/": {"origins": "*"}})
CORS(app, resources={r"/getdata_nqm/": {"origins": "*"}})
# CORS(app, resources={r"/nqm/":})

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/getdata_sqm', methods=['POST'])
def getdatasqm():
    content = request.get_json()
    print(content)
    getdata_sqm(content)
    return 'Hello, World'


@app.route('/getdata_nqm', methods=['POST'])
def getdatanqm():
    content = request.get_json()
    getdata_nqm(content)
    print(content)
    return 'Hello, World!'

#
# @app.route('/passdata_nqm', methods=['POST'])
# def passdatanqm():
#     content = request.get_json()
#     passdata_nqm(content)
#     print(content)
#     return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)

