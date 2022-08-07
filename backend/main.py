from flask import Flask, request, jsonify
from flask_cors import CORS
from nqm import getdata_nqm, pass_nqm
from sqm import getdata_sqm, pass_sqm
# import keyring

app = Flask(__name__)

CORS(app, resources={r"/getdata_sqm/": {"origins": "*"}})
CORS(app, resources={r"/getdata_nqm/": {"origins": "*"}})
CORS(app, resources={r"/passnqm/": {"origins": "*"}})
CORS(app, resources={r"/passnqm/": {"origins": "*"}})


# keyring.set_password('python', 'StreamAlpha', 'Password')
# keyring.get_password('python', 'StreamAlpha')
@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/getdata_sqm', methods=['POST'])
def getdatasqm():
    content = request.get_json()
    # print(content)
    getdata_sqm(content)
    return "hii"


@app.route('/getdata_nqm', methods=['POST'])
def getdatanqm():
    content = request.get_json()
    # print(content)
    getdata_nqm(content)
    return "done"


@app.route('/passnqm', methods=['POST'])
def passnqm():
    content = request.get_json()
    # print(content)
    data = pass_nqm(content)
    # print(data)
    return data


@app.route('/passsqm', methods=['POST'])
def passsqm():
    content = request.get_json()
    # print(content)
    data = pass_sqm(content)
    return data


# @app.route('/nqm/', methods=['GET'])
# def nqm():
#     data1 = pass_nqm()
#     return jsonify(data1)
#
#
# @app.route('/sqm/', methods=['GET'])
# def sqm():
#     data2 = pass_sqm()
#     return jsonify(data2)


if __name__ == "__main__":
    app.run(debug=True)
