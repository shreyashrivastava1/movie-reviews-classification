from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app,supports_credentials=True)



classifier = pipeline("text-classification", model="bhadresh-savani/bert-base-uncased-emotion")

@app.route('/predict', methods=['POST', 'OPTIONS'])
@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        print("OPTIONS preflight received")
        return '', 200

    data = request.get_json()
    print("/predict POST received:", data)

    if not data or 'text' not in data:
        return jsonify({'error': 'Missing "text" field'}), 400

    result = classifier(data['text'])
    return jsonify(result)



if __name__ == "__main__":
    app.run(debug=True, port=5001)
