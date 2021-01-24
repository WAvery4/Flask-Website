import random
from flask import Flask

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    choices = [-1, -0.5, 0, 0.5, 1]
    news_sources = ['xyz.com', 'lion.com', 'usp.com', 'abc.com', 'politexas.com']
    random.shuffle(news_sources)
    political_leaning = list(map(lambda x : random.choice(choices), range(5)))
    source_reputation = list(map(lambda x : random.choice(choices), range(5)))
    data = [list(a) for a in zip(news_sources, political_leaning, source_reputation)]
    return {'data': data}
