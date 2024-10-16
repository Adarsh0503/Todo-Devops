pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Use SSH URL if possible
                git branch: 'main', url: 'git@github.com:Adarsh0503/Todo-Devops.git' // SSH URL
                // Uncomment below line and comment above if using HTTPS and credentials are set
                // git 'https://github.com/Adarsh0503/Todo-Devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Check if Dockerfile exists
                    if (fileExists('./frontend/Dockerfile')) {
                        // Build the Docker image
                        def frontendImage = docker.build("frontend-image", "./frontend")
                    } else {
                        error "Dockerfile not found in ./frontend"
                    }
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
