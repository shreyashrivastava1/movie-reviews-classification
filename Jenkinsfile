pipeline {
    agent any

    environment {
        DOCKER_BUILDKIT = 1
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'dev', url: 'https://github.com/shreyashrivastava1/movie-reviews-classification.git'
            }
        }

        stage('Build and Run') {
            steps {
                sh '''
                echo "🛑 Stopping previous containers..."
                docker-compose down

                echo "Building and starting new containers..."
                docker-compose up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo '✅ App deployed and running!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
