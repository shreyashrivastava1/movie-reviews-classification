import unittest
import json
from app import app

class EmotionAPITestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_valid_emotion_text(self):
        response = self.client.post('/predict', json={'text': "I can't believe it! This is amazing!"})
        self.assertEqual(response.status_code, 200)
        json_data = response.get_json()
        self.assertIn('label', json_data[0])  # because HuggingFace returns a list of dicts
        self.assertIn(json_data[0]['label'].lower(), ["joy", "anger", "sadness", "surprise", "love", "fear"])

    def test_missing_text_field(self):
        response = self.client.post('/predict', json={'review': "Wrong key"})
        self.assertEqual(response.status_code, 400)
        self.assertIn("error", response.get_json())

    def test_empty_input(self):
        response = self.client.post('/predict', json={'text': ''})
        self.assertEqual(response.status_code, 200)
        json_data = response.get_json()
        self.assertIsInstance(json_data, list)
        self.assertIn('label', json_data[0])

    def test_options_request(self):
        response = self.client.options('/predict')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
