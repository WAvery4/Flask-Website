import random
from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

# simulate communication with a database
@app.route('/api/data')
def manipulate_data():
    data = [["abc.com", 1, 0], ["lion.com", 0.5, 0.5], ["xyz.com", -0.5, 1], ["politexas.com", -1, 0], ["usp.com", 0, 0]]
    return {'data': data}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

