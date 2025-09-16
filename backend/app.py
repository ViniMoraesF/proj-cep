from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/cep/<cep>")
def get_cep(cep):
    url = f"https://viacep.com.br/ws/{cep}/json/"
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(port=5000, debug=True)
