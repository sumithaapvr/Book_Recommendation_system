pipeline {
    agent any
    
    environment {
        VERSION = "${BUILD_NUMBER}"
        FRONTEND_IMAGE = "sumithaapvr/demo-app"
        BACKEND_IMAGE = "sumithaapvr/backend-app"
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "📥 Cloning repository..."
                git branch: 'main', url: 'https://github.com/sumithaapvr/Book_Recommendation_system.git'
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    docker.build("${FRONTEND_IMAGE}:${VERSION}", './demo')
                    docker.build("${BACKEND_IMAGE}:${VERSION}", './backend')
                    
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        docker.image("${FRONTEND_IMAGE}:${VERSION}").push()
                        docker.image("${BACKEND_IMAGE}:${VERSION}").push()
                        docker.image("${FRONTEND_IMAGE}:${VERSION}").tag('latest')
                        docker.image("${BACKEND_IMAGE}:${VERSION}").tag('latest')
                        docker.image("${FRONTEND_IMAGE}:latest").push()
                        docker.image("${BACKEND_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Deploy App') {
            steps {
                echo "🚀 Deploying app with docker-compose..."
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }

        stage('Cleanup') {
            steps {
                echo "🧹 Cleaning up unused Docker images..."
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo "✅ Build and deploy successful!"
        }
        failure {
            echo "❌ Build or deploy failed."
        }
    }
}
