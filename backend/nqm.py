import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client['myproject2']
collection_nqm = db['nqm']


def getdata_nqm(data):
    collection_nqm.insert_one(data)


def pass_nqm(data):
    # data=list(db.collection_nqm.find())
    data =collection_nqm.find_one({'name':data['name']},{'_id':0})
    # print(data)
    if(data==None):
        return "we have no data"
    else:
        return data
# data=pass_nqm(d)
# print(data)







