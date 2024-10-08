pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'adarsh1602/frontend-app:v1'
        CONTAINER_NAME = 'frontend_app_container'
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    echo "Pulling Docker image: ${DOCKER_IMAGE}"
                    docker.image(DOCKER_IMAGE).pull()
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    echo "Running Docker container: ${CONTAINER_NAME}"
                    // Stop and remove the container if it's already running
                    def existingContainer = docker.ps().find { it.name == CONTAINER_NAME }
                    if (existingContainer) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    }
                    // Run the container
                    docker.run(DOCKER_IMAGE, "-d --name ${CONTAINER_NAME} -p 80:80")
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    echo "Running tests (if applicable)..."
                    // Add commands to run your tests here, e.g., using curl to hit your endpoints
                    // Example: sh "curl http://localhost:80"
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            // Clean up Docker containers and images if needed
            sh "docker stop ${CONTAINER_NAME} || true"
            sh "docker rm ${CONTAINER_NAME} || true"
        }
    }
}
