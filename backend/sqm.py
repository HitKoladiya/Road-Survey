import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client['myproject2']
collection_sqm = db['sqm']


def putdata_sqm(data):
    collection_sqm.insert_one(data)

#
def pass_sqm(data):
    data=collection_sqm.find_one({'name':data['name']},{'_id':0})
    if (data == None):
        return "we have no data"
    else:
        return data


# d={"name":"hit"}
# getdata_sqm(d)
