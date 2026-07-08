node {
    stage ('Checkout clonning...'){
        checkout scm
    }
    stage ('Building.....'){
        sh '''
        sudo rm -rf /var/www/html/*
        sudo cp -r ./* /var/www/html/

        sudo systemctl restart apache2
        '''
    }

    stage('Build successfull....'){
        echo 'Build successfull.'
    }
}