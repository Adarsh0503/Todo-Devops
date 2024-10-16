pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Use the HTTPS URL and specify credentials if necessary
                git branch: 'main', url: 'https://github.com/Adarsh0503/Todo-Devops.git'// Replace with your credential ID
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def frontendImage = docker.build("frontend-image", "./frontend")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container
                    sh 'docker stop frontend-container || true'
                    sh 'docker rm frontend-container || true'
                    
                    // Run the new container
                    sh 'docker run -d --name frontend-container -p 3000:3000 frontend-image'
                }
            }
        }
    }

    post {
        always {
            // Clean up old images
            sh 'docker rmi frontend-image || true'
        }
    }
}
