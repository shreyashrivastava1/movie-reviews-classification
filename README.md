# Movie Reviews Classification Application

## Overview

The Sentiment Analysis App is a React-based frontend that interacts with a machine learning-powered backend to analyze movie reviews. The system determines whether the sentiment of a given movie review is positive or negative using Natural Language Processing (NLP) and Machine Learning (ML) models.

## Features

- Accepts text input for movie reviews
- Processes the review using an ML model
- Displays sentiment classification as Positive or Negative
- Provides real-time user interaction

## Technologies Used

### Frontend:

- React.js (UI Development)
- Axios (API Calls)
- HTML, CSS (Styling & Layout)

### Backend:

- Python (ML Model & API)
- Flask (REST API Development)
- TensorFlow/Keras, Scikit-learn, NLTK (ML & NLP Processing)

### DevOps
- Docker
- Jenkins

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/shreyashrivastava1/movie-reviews-classification.git
   cd sentiment-analysis
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the frontend application:**

   ```sh
   npm start
   ```

4. **Backend Setup:**
   - Navigate to the backend folder and install required dependencies:
     ```sh
     pip install -r requirements.txt
     ```
   - Start the Flask API:
     ```sh
     python app.py
     ```

## Project Structure

```
/sentiment-analysis
│── /src
│   ├── components (React UI Components)
│   ├── pages (UI Screens)
│   ├── services (API Calls)
│   ├── App.js (Main UI Logic)
│── /public
│   ├── index.html (HTML Entry Point)
│── /backend
│   ├── app.py (Flask API)
│   ├── model.py (ML Model Processing)
│── package.json (Frontend Dependencies)
│── README.md (Project Documentation)
```

## API Endpoints

- **POST /predict** - Accepts a movie review and returns sentiment classification

  **Example Request:**

  ```json
  {
    "review": "This movie was fantastic! The acting was superb."
  }
  ```

  **Example Response:**

  ```json
  {
    "sentiment": "Positive"
  }
  ```

## Deployment Strategy

- **Containerization:** Docker is used to containerize the application.
- **Orchestration:** Kubernetes manages deployments in cloud environments.
- **CI/CD Pipeline:** Jenkins automates testing and deployment.

## Security Considerations

- Input validation to prevent malicious attacks
- Secure API endpoints with authentication if required
- Rate limiting to prevent DDoS attacks

## Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License.
