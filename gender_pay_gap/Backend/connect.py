import pandas as pd
from pymongo import MongoClient
import os

dir_actual = os.path.dirname(os.path.abspath(__file__))

ruta_csv = os.path.join(dir_actual, 'gender_pay_gap.csv')

df = pd.read_csv(ruta_csv, encoding='latin1')

client_atlas = MongoClient('mongodb+srv://wachu:1234@cluster0.veeqce2.mongodb.net/?retryWrites=true&w=majority')
db_atlas = client_atlas['gender_data']
collection_atlas = db_atlas['dataset']

data = df.to_dict(orient='records')
collection_atlas.insert_many(data)