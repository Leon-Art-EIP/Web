pipeline{
  
  agent any
  
  tools {nodejs "NodeJS"}
  parameters{
    string(name: 'SPEC', defaultValue: "cypress/integration/**/**", description: "Enter the script path that you want to execute")
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice the browser where you want to execute your tests")
  }
  
  options{
    ansiColor('xterm')
  }
  
  stages{
    stage("Install") {
      steps {
        sh "npm install"
        sh "npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator"
        sh 'sudo apt-get update'
        sh 'wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -'
        sh 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google.list'
        sh 'sudo apt-get update'
        sh 'sudo apt-get install -y google-chrome-stable'
      }
    }
    stage('Starting Server'){
      steps{
        echo "Starting Server..."
        sh 'nohup npm start &'
      }
    }
    stage('Building'){
      steps{
        echo "Building..."
      }
    }
    stage('Testing'){
      steps{
        sh "npx cypress run --headless --spec ./cypress/e2e/homePage/homePageContent.cy.ts --reporter mochawesome --reporter-options reportDir=cypress,overwrite=false,html=true"
      }
    }
  }
  
  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}
