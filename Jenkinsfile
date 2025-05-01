pipeline {
    agent any

    stages {
        stage('Build and Run') {
            steps {
                echo "🛑 Stopping previous containers..."
                bat 'docker-compose down'

                echo "🚀 Building and starting new containers..."
                bat 'docker-compose up --build -d'
            }
        }
    }

    post {
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
