from flask import Flask, request, jsonify
from flask_cors import CORS

from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load the emotion detection model from Hugging Face
classifier = pipeline("text-classification", model="bhadresh-savani/bert-base-uncased-emotion")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print("Received:", data)  # 🧪 log the request

    if not data or 'text' not in data:
        return jsonify({'error': 'Missing "text" field'}), 400

    text = data['text']
    result = classifier(text)
    print("Prediction result:", result)  # 🧪 log the output
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
