pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '=== Starting Checkout Stage ==='
                echo 'Checking out the code from the GitHub repository'
                git url: 'https://github.com/Adarsh0503/Todo-Devops.git', branch: 'main'
                echo '=== Checkout Stage Completed ==='
            }
        }

        stage('Check Docker') {
            steps {
                script {
                    echo '=== Starting Check Docker Stage ==='
                    echo 'Checking Docker installation'
                    def dockerStatus = sh(script: 'systemctl is-active --quiet docker || exit 1', returnStatus: true)
                    if (dockerStatus != 0) {
                        error 'Docker service is not running!'
                    }
                    def dockerVersion = sh(script: 'docker --version', returnStdout: true).trim()
                    echo "Docker Version: ${dockerVersion}"
                    echo '=== Check Docker Stage Completed ==='
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo '=== Starting Build Docker Image Stage ==='
                    echo 'Changing to the frontend directory and building the Docker image'
                    dir('frontend') {  // Assuming your Dockerfile is in the 'frontend' directory
                        def buildStatus = sh(script: 'docker build -t todo-node-app1 .', returnStatus: true)
                        if (buildStatus != 0) {
                            error 'Docker build failed!' // Error handling if the build fails
                        }
                    }
                    echo '=== Build Docker Image Stage Completed ==='
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                script {
                    echo '=== Starting Stop and Remove Existing Container Stage ==='
                    echo 'Stopping and removing the existing container if it exists'
                    sh '''
                    docker stop node-todo-app1 || true
                    docker rm node-todo-app1 || true
                    '''
                    echo '=== Stop and Remove Existing Container Stage Completed ==='
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    echo '=== Starting Run Docker Container Stage ==='
                    echo 'Running the Docker container'
                    def runStatus = sh(script: 'docker run -d --name node-todo-app1 -p 3000:3000 todo-node-app1', returnStatus: true)
                    if (runStatus != 0) {
                        error 'Failed to run Docker container!' // Error handling if the container fails to run
                    }
                    echo '=== Run Docker Container Stage Completed ==='
                }
            }
        }
    }

    post {
        success {
            echo '=== Build and Deployment Successful! ==='
        }
        failure {
            echo '=== Build Failed! ==='
        }
        always {
            echo '=== Cleaning Up... ==='
            script {
                sh 'docker rm -f node-todo-app1 || true' // Clean up
                echo '=== Cleanup Completed ==='
            }
        }
    }
}
