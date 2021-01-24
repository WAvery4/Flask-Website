import random
from flask import Flask
from flask import request

app = Flask(__name__)

# simulate communication with a database
@app.route('/api/data', methods = ['GET', 'POST'])
def manipulate_data():
    data = [["abc.com", 1, 0], ["lion.com", 0.5, 0.5], ["xyz.com", -0.5, 1], ["politexas.com", -1, 0], ["usp.com", 0, 0]]
    return {'data': data}
