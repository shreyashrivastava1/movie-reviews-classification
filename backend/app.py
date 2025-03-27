from flask import Flask, request, jsonify
from transformers import pipeline
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# Rate limiting (5 requests per minute per IP)
limiter = Limiter(get_remote_address, app=app, default_limits=["5 per minute"])

# Load model
classifier = pipeline("text-classification", model="bhadresh-savani/bert-base-uncased-emotion")

@app.route('/predict', methods=['POST'])
@limiter.limit("5 per minute")  # Apply rate limit
def predict():
    try:
        data = request.get_json()

        # Input validation
        if not data or "text" not in data:
            return jsonify({"error": "Text input is required"}), 400

        text = data["text"]

        # Ensure text is a string and not empty
        if not isinstance(text, str) or text.strip() == "":
            return jsonify({"error": "Invalid text input"}), 400

        prediction = classifier(text)[0]
        return jsonify({"label": prediction['label'], "score": prediction['score']})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
