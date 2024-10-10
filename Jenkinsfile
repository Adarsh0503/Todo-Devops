pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in the frontend folder
                    docker.build("todoapp:latest", "-f frontend/Dockerfile frontend/")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container with appropriate port mapping
                    docker.image("todoapp:latest").run('-p 8080:3000') // Exposing port 3000 from the container to port 8080 on the host
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Uncomment if you want to remove the image after the build
                    // docker.image("todoapp:latest").remove()
                }
            }
        }
    }
}
