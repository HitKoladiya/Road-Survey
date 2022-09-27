from flask import Flask, request
from flask_cors import CORS
from nqm import putdata_nqm, pass_nqm
from sqm import putdata_sqm, pass_sqm


app = Flask(__name__)

CORS(app)

# keyring.set_password('python', 'StreamAlpha', 'Password')
# keyring.get_password('python', 'StreamAlpha')
@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/putdata_sqm', methods=['POST'])
def getdatasqm():
    content = request.get_json()
    # print("hii")
    putdata_sqm(content)
    return {'submit':'successful'}


@app.route('/putdata_nqm', methods=['POST','get'])
def getdatanqm():
    # print("hello")
    content = request.get_json()
    # print(content)
    putdata_nqm(content)
    return {'submit':'successful'}


@app.route('/passnqm', methods=['POST','get'])
def passnqm():
    content = request.get_json()
    print(content)
    data = pass_nqm(content)
    # print(data)
    return data


@app.route('/passsqm', methods=['POST'])
def passsqm():
    content = request.get_json()
    # print(content)
    data = pass_sqm(content)
    print(data)
    return data


if __name__ == "__main__":
    app.run(debug=True)



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

