import pymongo
import sqm,nqm
client = pymongo.MongoClient("mongodb+srv://Hit:hi@cluster0.vpx7qvp.mongodb.net/test")
database1 = client['myproject2']
collection_comb = database1['nqm & sqm']

# data={"name":"hit"}
# data1=merge_data(data)
# print(data1)
# putdata_comb(data1)

# def putdata_comb(data):
#     collection_comb.insert_one(data)


def merge_data(data):
    data1 = nqm.pass_nqm(data)
    data2 = sqm.pass_sqm(data)
    data1.update(data2)
    return data1


def pass_comb(data):
    data = collection_comb.find_one({'name':data['name']},{'_id':0})
    if (data == None):
        return "we have no data"
    else:
        return data

# data={"name":"hit"}
# data1=pass_comb(data)
# print(data1)
