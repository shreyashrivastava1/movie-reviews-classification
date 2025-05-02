pipeline {
    agent any

    environment {
        DOCKER_BUILDKIT = 1
        FRONTEND_PORT = '3000'
        BACKEND_PORT = '5001'
    }

    options {
        timestamps()
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo "Cloning GitHub repository (dev branch)..."
                git branch: 'dev', url: 'https://github.com/shreyashrivastava1/movie-reviews-classification.git'
            }
        }

        stage('Verify Docker Setup') {
            steps {
                echo "Checking Docker versions..."
                bat 'docker --version'
                bat 'docker-compose --version'
            }
        }

        stage('Clean Previous Containers') {
            steps {
                echo "Stopping previous Docker containers..."
                bat 'docker-compose down || echo No previous containers.'
            }
        }

        stage('Build Images') {
            steps {
                echo "Building Docker images..."
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                echo "Starting backend and frontend..."
                bat 'docker-compose up -d'
            }
        }

        stage('Skipping Backend Smoke Test') {
            steps {
                echo "ℹSkipping backend API test (curl) for now. Please test manually via Postman or frontend UI."
            }
        }

    }

    post {
        success {
            echo '✅ Jenkins pipeline completed successfully!'
        }
        failure {
            echo '❌ Jenkins pipeline failed. Please check logs.'
        }
    }
}
