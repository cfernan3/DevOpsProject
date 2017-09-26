## Team
* Calvin Fernando (cfernan3)
* Davis Pynadath (dppynada)
* Jeris Alan Jawahar (jjawaha)
* Revanth Pathuri (rpathur)


# Environment

![image](https://media.github.ncsu.edu/user/6391/files/45a7417c-a224-11e7-977d-f19af6ba061d)


# Directory Tree

  ![untitled diagram 6](https://media.github.ncsu.edu/user/6391/files/c1bd9c48-a238-11e7-8a2c-3a44b89eedd5)


# Report
### Experiences

* ***Jenkins installation*** :While installing Jenkins, a UI setup Wizard runs which demands the initialAdminPassword to be pasted manually. While automating the installation, the setup Wizard was an obstacle. Hence, the runSetupWizard was disabled in `/etc/default/jenkins` file by setting the JAVA_ARGS appropriately. In addition, the useSecurity was set to false inorder to avoid any manual intervention.
* ***Jenkins creating a job*** :While creating a job in Jenkins, multiple fields viz. Project Name, Source Code Management, Build Triggers etc. needs to be entered manually either using CLI or UI. Automating this preocess directed us to using the template viz config.xml for each of the jenkins job.
* ***Jenkins plugins*** :We came across a large number of plugins available for jenkins. However, we primarily used git and postbuild-task plugins for source code management and running shell commands post build repectively.
* ***Triggering build*** :Triggering the build in jenkins automatically was a challenging task. However, there were multiple ways of achieving it viz. using jenkins-cli plugin or jenkins_job module for ansible. We chose the later because we can achieve two task viz creating the job and running the build automatically using the same module.
* ***sudoers*** : The post build action consists of a script that includes a command to execute the ansible-playbook that provsions an EC2 instance and configures checkbox.io or iTrust applicaitons on it. The command should be prepended with sudo because the script will be executed by the jenkins user. We encountered a hurdle in this  step. The post build was repeatedly failing because when the the script runs with sudo, it prompts for a password. The issue was resolved after editing the `/etc/sudoers` file appropriately.
* ***ansible.cfg*** :After the checkbox.io or iTrust builds were successful and the post build triggered in Jenkins ,we faced an issue with "host ket verification failed" . We were stuck here for awhile and after exhaustive research found that the reason for the error was the host_key_checking performed. On setting `host_key_checking=false` ,in /etc/ansible/ansible.cfg ,resolved the error. If it weren't for the error, we wouldn't have explored the ansible.cfg file
* ***checkbox.io*** : By default vagrant considers the python interpreter to be located in `/usr/bin/python` folder. This was not the case in ubuntu/xenial64 machine for which we had to specify the python interpreter location as `/usr/bin/python3`.
* ***nginx configuration*** :nginx web server expects the server block configurations defined in the `/sites-available/default` file to be nested within the http block of `nginx.conf` file. We were making the mistake of putting it outside the http block which led to unexpected errors. Once we identified the silly issue, it was pretty easy to set up nginx to point to the correct static content for checkbox.io.
* ***iTrust deployment***: When we deployed `iTrust-x.x.x.war` file on the Tomcat server after `mvn package` it would fail to load the CSS styles in the iTrust application. So we had to rename the war file to simply `iTrust.war` for it to display and work as expected. It took us more than 2 days for us to figure out where the issue lied.

## File Description
`configuration.yml` - Runs on the ansible master and configures a node with jenkins and then the build jobs on jenkins server.

`checkboxio_job.xml` - Jenkins job template for checkbox.io application

`iTrust.xml` - Jenkins job template for iTrust application

`checkbox.io/ConfigurationScript.sh` - Installs and configures checkbox.io application on Amazon EC2 instances.

`checkbox.io/ProvisioningScript.sh` - Script to provision Amazon EC2 instances for checkbox.io

`checkbox/ProvisionCheckboxVM.yml` - Provision the Amazon EC2 instance for checkbox.io

`checkbox/checkbox_post.yml` - Sets up the necessary packages for successfully configuring the checkbox.io application

`checkbox/default` - Stores the default configuration for the http server running on nginx

`checkbox/nginx.conf` - Strores the default configuration of nginx server

`iTrust/ConfigurationScript.sh` - Installs and configures iTrust application on Amazon EC2 instances.

`iTrust/ProvisioningScript.sh` - Provision the Amazon EC2 instance for iTrust

`iTrust/ProvisioniTrustbox.yml` - Ansible script to provision the Amazon EC2 instances

`iTrust/iTrust.yml` - Sets up the necessary packages for successfully configuration the iTrust application

`iTrust/tomcatEnvConfig.sh` - Configures the Tomcat environment after its installation

`iTrust/tomcat-initscript.sh` - Startup script for Tomcat server

`iTrust/tomcat-users.xml` - Set up the tomcat users roles and account credentials

`iTrust/settings.xml` - Stores default tomcat username and password

`iTrust/manager.xml` - To set the manager app configuration for Tomcat

`iTrust/context.xml` - To enable the web application to use container servelets.

`iTrust/my.cnf` - Stores the MySQL configuration


### Contribution
* **Jenkins auto-configuration :** Calvin, Revanth
* **Checkbox.io ansible play-book scripting:** Jeris, Calvin
* **Checkbox.io Testing:** Davis, Revanth
* **iTrust ansible play-book scripting:** Davis, Jeris
* **iTrust Testing:** Calvin, Jeris
* **AWS EC2 setup:** Revanth, Davis
* **Report:** All
