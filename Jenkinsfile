pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository and be happy please
                git branch: 'main', url: 'https://github.com/Adarsh0503/Todo-Devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker Image
                    def app = docker.build("TodoApp")
                }
            }
        }

        stage('Clean Up') {
            steps {
                // Remove old containers
                sh 'docker rm -f mern-container || true'
                // Remove old images
                sh 'docker rmi $(docker images -f "dangling=true" -q) || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker Container
                    sh 'docker run -d -p 3000:3000 --name mern-container TodoApp'
                }
            }
        }
    }
}
