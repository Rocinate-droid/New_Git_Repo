 pipeline {
    agent any
    environment {
                  AWS_ACCESS_KEY_ID= 'access_key'
                  AWS_SECRET_ACCESS_KEY = 'secret_key'
                }
    stages {
        stage ("terraform build") {
           steps {
            withCredentials([string(credentialsId: 'access_key', variable: 'AWS_ACCESS_KEY_ID'), string(credentialsId: 'secret_key', variable: 'AWS_SECRET_ACCESS_KEY')])
             {
            sh '''
            cd master_template
            bash script.sh 
               '''
         }
        }
    }
}
}
