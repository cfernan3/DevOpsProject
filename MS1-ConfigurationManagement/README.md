# Environment

![image](https://media.github.ncsu.edu/user/6391/files/45a7417c-a224-11e7-977d-f19af6ba061d)


# Report
### Experiences

* ***Jenkins installation*** :While installing Jenkins, a UI setup Wizard runs which demands the initialAdminPassword to be pasted manually. While automating the installation, the setup Wizard was an obstacle. Hence, the runSetupWizard was disabled in /etc/default/jenkins file by setting the JAVA_ARGS appropriately. In addition, the useSecurity was set to false inorder to avoid any manual intervention.
* ***Jenkins creating a job*** :While creating a job in Jenkins, multiple fields viz. Project Name, Source Code Management, Build Triggers etc. needs to be entered manually either using CLI or UI. Automating this preocess directed us to using the template viz config.xml for each of the jenkins job.
* ***Jenkins plugins*** :We came across a large number of plugins available for jenkins. However, we primarily used git and postbuild-task plugins for source code management and running shell commands post build repectively.
* ***Triggering build*** :Triggering the build in jenkins automatically was a challenging task. However, there were multiple ways of achieving it viz. using jenkins cli plugin or jenkins_job module for ansible. We chose the later because we can achieve two task viz creating the job and running the build automatically using the same module.
* ***sudoers*** : The post build action consists of a script that includes a command to execute the ansible-playbook that provsions an EC2 instance and configures checkbox.io or iTrust applicaitons on it. The command should be prepended with sudo because the script will be executed by the jenkins user. We encountered a hurdle in this  step. The post build was repeatedly failing because when the the script runs with sudo, it prompts for a password. The issue was resolved after editing the /etc/sudoers file appropriately.
* ***


### Contribution

