 pipeline {
    agent any
    stages {
        stage ("terraform build") {
           steps {

            sh '''
            cd master_template; terraform init
            terraform apply --auto-approve
            terraform output > newfile.txt
               '''
        }
    }
}
}
