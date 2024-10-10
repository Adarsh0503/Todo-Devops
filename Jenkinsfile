pipeline {
    agent any

    environment {
        IMAGE_NAME = 'frontend-image'
        CONTAINER_NAME = 'frontend-container'
        DOCKER_PORT = '3000'
    }

    stages {
        stage('Build') {
            steps {
                // Checkout code from GitHub to acces it
                git 'https://github.com/Adarsh0503/Todo-Devops.git/' // Update to your repository URL

                // Build frontend Docker image
                sh "docker build -t ${IMAGE_NAME} ./frontend" // Build the Docker image from the frontend directory
            }
        }
        stage('Test') {
            steps {
                // Run frontend tests if any
                // Example: npm test
                // Uncomment and adjust this line based on your testing framework
                // sh 'npm install' // Install dependencies if needed
                // sh 'npm test' // Run tests
                echo "Running tests... (Add your test commands here)"
            }
        }
        stage('Deploy') {
            steps {
                // Run Docker container
                sh "docker run -d -p ${DOCKER_PORT}:${DOCKER_PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}" // Run the container
            }
        }
    }

    post {
        always {
            // Cleanup: Stop and remove the container after the build
            sh "docker stop ${CONTAINER_NAME} || true" // Stop the container if it's running
            sh "docker rm ${CONTAINER_NAME} || true" // Remove the container
        }
    }
}
