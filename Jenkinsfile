 pipeline {
    agent any
    stages {
        stage ("terraform build") {
           steps {

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
