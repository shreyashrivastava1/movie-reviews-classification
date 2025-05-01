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
                echo "Cloning the GitHub repository (branch: dev)..."
                git branch: 'dev', url: 'https://github.com/shreyashrivastava1/movie-reviews-classification.git'
            }
        }

        stage('Check Docker Environment') {
            steps {
                echo "Verifying Docker installation and versions..."
                bat 'docker --version'
                bat 'docker-compose --version'
            }
        }

        stage('Clean Old Containers') {
            steps {
                echo "Stopping and removing any previous containers..."
                bat 'docker-compose down || echo No containers to stop.'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "Building backend and frontend Docker images..."
                bat 'docker-compose build'
            }
        }

        stage(' Deploy Containers') {
            steps {
                echo "Starting all services using Docker Compose..."
                bat 'docker-compose up -d'
            }
        }

        stage('Smoke Test Backend') {
            steps {
                echo "Sending test request to /predict API to verify backend..."
                bat """
                    curl -X POST http://localhost:%BACKEND_PORT%/predict ^
                    -H "Content-Type: application/json" ^
                    -d "{\\"text\\": \\"I am so happy\\"}"
                """
            }
        }

        stage('Confirm Frontend Deployment') {
            steps {
                echo "Testing frontend homepage response..."
                bat """
                    curl -I http://localhost:%FRONTEND_PORT% || echo Frontend may still be starting...
                """
            }
        }

        // Optional: Add cleanup stage
        // stage('Cleanup After Test') {
        //     steps {
        //         echo "Cleaning up containers after verification..."
        //         bat 'docker-compose down'
        //     }
        // }
    }

    post {
        success {
            echo '✅ Deployment and basic testing succeeded!'
        }
        failure {
            echo '❌ Something went wrong. Please check the console logs.'
        }
    }
}
