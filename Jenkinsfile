 pipeline {
    agent any
    environment {
                  ACCESS_KEY= 'access_key'
                  SECRET_KEY = 'secret_key'
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
