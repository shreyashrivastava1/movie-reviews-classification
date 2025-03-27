from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load the trained model (or use a pre-trained one for now)
classifier = pipeline("text-classification", model="bhadresh-savani/bert-base-uncased-emotion")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        text = data.get("text", "")

        if not text:
            return jsonify({"error": "Text is required"}), 400

        prediction = classifier(text)[0]  # Get top prediction
        return jsonify({"label": prediction['label'], "score": prediction['score']})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)