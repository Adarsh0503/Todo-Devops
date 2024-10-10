pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Checkout code from GitHub and be happy
                git 'https://github.com/Adarsh0503/Todo-Devops.git' // Update to your repository URL

                // Build frontend Docker image
                sh 'docker build -t frontend-image ./frontend' // Build the Docker image from the frontend directory
            }
        }
        stage('Test') {
            steps {
                // Run frontend tests if any
                // Example: npm test
                // Uncomment and adjust this line based on your testing framework
                // sh 'npm install' // Install dependencies if needed
                // sh 'npm test' // Run tests
                echo "hello"
            }
        }
        stage('Deploy') {
            steps {
                // Run Docker container
                sh 'docker run -d -p 3000:3000 --name frontend-container frontend-image' // Run the container
            }
        }
    }

    post {
        always {
            // Cleanup: Stop and remove the container after the build
            sh 'docker stop frontend-container || true' // Stop the container if it's running
            sh 'docker rm frontend-container || true' // Remove the container
        }
    }
}
