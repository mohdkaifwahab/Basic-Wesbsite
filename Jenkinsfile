node {

    stage('Checkout cloning...') {
        checkout scm
    }

    stage('Deploy') {
        sh '''
        sudo rm -rf /var/www/html/*
        sudo cp -r ./* /var/www/html/
        sudo systemctl restart apache2
        '''
    }

    stage('Success') {
        echo 'Build successful.'
    }
}