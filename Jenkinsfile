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

        stage('Build and Deploy App') {
            steps {
                dir('frontend') {
                    sh '''
                    echo " Cleaning previous containers..."
                    docker-compose down

                    echo " Building and running containers..."
                    docker-compose up --build -d
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Web app deployed successfully!'
        }
        failure {
            echo '❌ Something went wrong during deployment.'
        }
    }
}
