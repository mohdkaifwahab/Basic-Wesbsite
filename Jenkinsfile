node {

    stage('Checkout cloning...') {
        checkout scm
    }

    stage('Deploy') {
        sh '''
        sudo -u jenkins rm -rf /var/www/html/*
        sudo -u jenkins cp -r ./* /var/www/html/
        sudo systemctl restart apache2
        '''
    }

    stage('Success') {
        echo 'Build successful.'
    }
}