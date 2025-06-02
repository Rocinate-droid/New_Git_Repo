 pipeline {
    agent any
    environment {
                  AWS_ACCESS_KEY_ID= 'access_key'
                  AWS_SECRET_ACCESS_KEY = 'secret_key'
                }
    stages {
        stage ("terraform build") {
           steps {
            withCredentials([string(credentialsId: 'access_key', variable: 'ACCESS_KEY'), string(credentialsId: 'access_key', variable: 'ACCESS_KEY')])
             {
            sh '''
            pwd
            cd master_template; terraform init
            pwd
            env
            terraform plan
            cd
            terraform output > newfile.txt
               '''
         }
        }
    }
}
}
