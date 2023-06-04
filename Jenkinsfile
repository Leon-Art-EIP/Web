pipeline{
  
  agent any
  
  triggers { githubPush() }
  
  tools {nodejs "NodeJS"}
  parameters{
    string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path that you want to execute")
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice the browser where you want to execute your tests")
  }
  
  options{
    ansiColor('xterm')
  }
  
  stages{
     stage('Ignore gh-pages') {
        when { 
            not { 
                branch 'master' 
            }
        }
    stage("Install") {
      steps {
        sh "npm install"
        sh "npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator"
        sh 'sudo apt-get update'
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
        sh "npx cypress run --headless --spec ${SPEC} --reporter mochawesome --reporter-options reportDir=cypress,overwrite=false,html=true"
      }
    }
  }
  
  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}
