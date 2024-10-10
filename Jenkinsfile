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
                    // Use a lowercase name for the Docker image and tag it as 'latest'
                    docker.build("todoapp:latest")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container, consider mapping ports if needed
                    docker.image("todoapp:latest").run('-p 8080:8080')  // Adjust port mapping as necessary
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Optionally, clean up resources
                    // Uncomment the line below if you want to remove the image after the build
                    // docker.image("todoapp:latest").remove()  
                }
            }
        }
    }
}
