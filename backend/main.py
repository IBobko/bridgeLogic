import requests
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        text = request.form['text']
        model = request.form['model']
        response = make_openai_request(text, model)
        return render_template('result.html', response=response)
    return render_template('index.html')


def make_openai_request(text, model):
    api_key = 'YOUR_OPENAI_API_KEY'
    url = 'https://api.openai.com/v1/embeddings'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }
    data = {
        'input': text,
        'model': model
    }
    response = requests.post(url, json=data, headers=headers)
    return response.json()


if __name__ == '__main__':
    app.run(debug=True)
