pipeline{
  
  agent any
  
  triggers { githubPush() }
  
  tools {nodejs "NodeJS"}
  parameters{
    string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path that you want to execute")
  }
  
  options{
    ansiColor('xterm')
  }
  
  stages{
    stage("Install") {
      steps {
        sh "npm install"
      }
    }
    stage('Building'){
        when { 
            not { 
                branch 'gh-pages' 
            }
        }
      steps{
        echo "Building..."
      }
    }
    stage('Testing'){
        when { 
            not { 
                branch 'gh-pages' 
            }
        }
      steps{
        sh "npm i"
        sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}}"
      }
    }
  }
  
  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}
