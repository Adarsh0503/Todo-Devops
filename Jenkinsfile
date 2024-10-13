pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from the GitHub repository'
                git url: 'https://github.com/Adarsh0503/Todo-Devops.git', branch: 'main' 
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Changing to the frontend directory and building the Docker image'
                    dir('frontend') {  // Assuming your Dockerfile is in the 'frontend' directory
                        // Use the 'returnStatus' option to capture the exit code
                        def buildStatus = sh(script: 'docker build -t todo-node-app1 .', returnStatus: true)
                        if (buildStatus != 0) {
                            error 'Docker build failed!' // Error handling if the build fails
                        }
                    }
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                script {
                    echo 'Stopping and removing the existing container if it exists'
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
                    echo 'Running the Docker container'
                    def runStatus = sh(script: 'docker run -d --name node-todo-app1 -p 3000:3000 todo-node-app1', returnStatus: true)
                    if (runStatus != 0) {
                        error 'Failed to run Docker container!' // Error handling if the container fails to run
                    }
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
        always {
            echo 'Cleaning up...'
            script {
                // Optionally clean up the container after the build
                sh '''
                docker rm -f node-todo-app1 || true
                '''
            }
        }
    }
}
