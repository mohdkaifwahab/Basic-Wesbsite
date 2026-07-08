node {
    stage ('Checkout clonning...'){
        checkout scm
    }
    stage ('Building.....'){
        sh '''
        sudo -u jenkins sudo rm -rf /var/www/html/*
        sudo -u jenkins sudo cp -r ./* /var/www/html/
        
        sudo systemctl restart apache2
        '''
    }

    stage('Build successfull....'){
        echo 'Build successfull.'
    }
}