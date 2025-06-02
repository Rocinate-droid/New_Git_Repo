 pipeline {
    agent any
    stages {
        stage ("terraform build") {
           steps {

            sh '''
            pwd
            cd master_template; terraform init
            terraform apply --auto-approve
            cd
            terraform output > newfile.txt
               '''
        }
    }
}
}
