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
    // stage("Install") {
    //     when { 
    //         not { 
    //             branch 'gh-pages' 
    //         }
    //     }
    //   steps {
    //     sh "npm install"
    //   }
    // }
    // stage('Starting Server'){
    //     when { 
    //         not { 
    //             branch 'gh-pages' 
    //         }
    //     }
    //   steps{
    //     echo "Starting Server..."
    //     sh 'nohup npm start &'
    //   }
    // }
    // stage('Testing'){
    //     when { 
    //         not { 
    //             branch 'gh-pages' 
    //         }
    //     }
    //   steps{
    //     sh "npm yarn test"
    //   }
    // }
    stage('Push to DockerHUb')
    {
      when { 
        branch 'dev'
      }
      steps{
        echo "Pushing to DockerHub..."
        sh "docker build -t ${DOCKER_USERNAME}/${DOCKER_REPO_DEV_FRONT}:${BUILD_NUMBER} ."
        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
        sh "docker push ${DOCKER_USERNAME}/${DOCKER_REPO_DEV_FRONT}:${BUILD_NUMBER}"
      }
    }
  }
  
  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}
