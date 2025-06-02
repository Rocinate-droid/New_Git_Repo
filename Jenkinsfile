 pipeline {
    agent any
    stages {
        stage ("terraform build") {
           steps {

            sh '''
            cd master_template; terraform apply --auto-approve
            cd master_template; terraform output > newfile.txt
               '''
        }
    }
}
}
