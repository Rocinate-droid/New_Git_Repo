 pipeline {
    agent any
    stages {
        stage ("terraform build") {
           steps {

            sh '''
            pwd
            cd master_template; terraform init
            terraform plan
            cd
            terraform output > newfile.txt
               '''
        }
    }
}
}
