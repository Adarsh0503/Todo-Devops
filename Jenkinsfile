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
                    // Use a lowercase name for the Docker image
                    docker.build("todoapp") 
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container
                    docker.image("todoapp").run()
                }
            }
        }
        stage('Clean Up') {
            steps {
                script {
                    // Optionally, clean up resources
                    // docker.image("todoapp").remove()  // Uncomment if needed
                }
            }
        }
    }
}
