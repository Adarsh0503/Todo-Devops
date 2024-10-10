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
                script { // Explicit closure
                    docker.build("todoapp:latest")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script { // Explicit closure
                    docker.image("todoapp:latest").run('-p 8080:8080') // Adjust port mapping as necessary
                }
            }
        }

        stage('Clean Up') {
            steps {
                script { // Explicit closure
                    // Uncomment if you want to remove the image after the build
                    // docker.image("todoapp:latest").remove()
                }
            }
        }
    }
}
