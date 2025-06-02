 pipeline {
    agent any
    stages {
        stage ("terraform build") {
           steps {

            sh '''
            cd master_template; terraform init
            master_template; terraform apply --auto-approve
            master_template; terraform output > newfile.txt
               '''
        }
    }
}
}
