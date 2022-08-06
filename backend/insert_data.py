import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client['myproject2']
collection_sqm = db['sqm']
# collection_getdata = db['sqm']
collection_nqm = db['nqm']

def getdata_sqm(data):
    collection_sqm.insert_one(data)
def getdata_nqm(data):
    collection_nqm.insert_one(data)

def passgetsqm(data):
    # gv6yh8j89jhy6t5r

passgetsqm("hit")