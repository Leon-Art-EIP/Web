pipeline{
    agent any
    
    triggers { githubPush() }

    tools {nodejs "NodeJS"}

    options{
        ansiColor('xterm')
    }
    
    stages {
        stage("Install") {
            steps {
                sh "npm install"
            }
        }
        stage('Testing'){
            steps{
                script {
                    try {
                        sh 'yarn run coverage | tee tests.log'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }
    }
  
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])

            script {
                def logContent = readFile('tests.log').trim()
                def branchName = env.BRANCH_NAME
                def userName = env.CHANGE_AUTHOR
                def buildNumber = env.BUILD_NUMBER

                discordSend(
                    webhookURL: "https://discord.com/api/webhooks/1123843395526348801/gx5ktVsVPEtc9kU9VQNn1SsK_e_g0Ad1stTgYEHHsBD1q34T4AC8F2dtMQNBi-N5nZBF",
                    title: "${env.JOB_NAME}",
                    description: """
                        Branch: ${branchName}
                        User: ${userName}
                        Log Content:
                        ${logContent}
                    """,
                    footer: "Build Number: ${buildNumber}",
                    result: currentBuild.currentResult
                )
            }
        }
    }
}
