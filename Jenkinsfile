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
                script {
                    // Change to the frontend directory and build the Docker image
                    dir('frontend') {  // Assuming your Dockerfile is in the 'frontend' directory
                        sh 'docker build -t todo-node-app1 .'
                    }
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                script {
                    // Stop and remove the existing container if it exists
                    sh '''
                    docker stop node-todo-app1 || true
                    docker rm node-todo-app1 || true
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container
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
