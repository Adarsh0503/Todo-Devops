pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the GitHub repository
                git url: 'https://github.com/Adarsh0503/Todo-Devops.git', branch: 'main' 
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    sh 'docker build -t todo-node-app1 .'
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                // Stop and remove the existing container if it exists
                script {
                    sh '''
                    docker stop node-todo-app1 || true
                    docker rm node-todo-app1 || true
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run the Docker container
                script {
                    sh 'docker run -d --name node-todo-app1 -p 3000:3000 todo-node-app1'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
