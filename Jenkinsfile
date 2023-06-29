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
                sh "npm install -g yarn"
                sh "yarn install"
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
            script {
                def logContent = readFile('tests.log').trim()
                def branchName = env.BRANCH_NAME
                def userName = env.CHANGE_AUTHOR
                def buildNumber = env.BUILD_NUMBER

                discordSend(
                    webhookURL: "https://discord.com/api/webhooks/1123846491438583859/SlPmshTyfkaePCJ0xJZIhja219nY5mezlxGGSyPWRhzUvxnxI2gG2PZ9RK-jRR3Hb3ne",
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
