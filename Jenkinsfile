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

        stage('Build Frontend & Backend Images') {
            steps {
                script {
                    echo "🔨 Building frontend image: ${FRONTEND_IMAGE}:${VERSION}"
                    docker.build("${FRONTEND_IMAGE}:${VERSION}", '--no-cache ./demo')

                    echo "🔨 Building backend image: ${BACKEND_IMAGE}:${VERSION}"
                    docker.build("${BACKEND_IMAGE}:${VERSION}", '--no-cache --progress=plain ./backend")
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    echo "📦 Pushing images to Docker Hub..."
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

        stage('Deploy') {
            steps {
                script {
                    echo "🚀 Deploying frontend and backend containers..."

                    // Stop and remove old containers if they exist
                    sh '''
                    docker rm -f frontend-container || true
                    docker rm -f backend-container || true
                    '''

                    // Run backend container
                    sh """
                    docker run -d --name backend-container -p 5000:5000 ${BACKEND_IMAGE}:${VERSION}
                    """

                    // Run frontend container
                    sh """
                    docker run -d --name frontend-container -p 4812:80 ${FRONTEND_IMAGE}:${VERSION}
                    """
                }
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
            echo "✅ Build, push, and deployment successful! Images tagged with version: ${VERSION}"
        }
        failure {
            echo "❌ Something went wrong. Check the logs above for errors."
        }
    }
}
