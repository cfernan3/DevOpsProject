# DevOpsProject

## Team
* Abhishek Bandarupalle (abandar)
* Calvin Fernando (cfernan3)
* Davis Pynadath (dppynada)
* Revanth Pathuri (rpathur)


Milestone1: https://github.ncsu.edu/rpathur/DevOpsProject/tree/master/MS1-ConfigurationManagement

Milestone2: https://github.ncsu.edu/rpathur/DevOpsProject/tree/Milestone2/MS2-TestAnalysis

Milestone3: https://github.ncsu.edu/rpathur/DevOpsProject/tree/Milestone3/MS3-Deployment

# Prerequisites

* Add the public IP of the EC2 instance in the inventory file
* Add the ssh key file to log into the EC2 instance in the inventory file
* Add the public IP for the EC2 instances for iTrust and checkbox in the inventory files 
* Add the Access key and secret key in the Provision*.yml files


# Deployment

iTrust and checkbox.io applications were successfully deployed on the two EC2 instances.
The Jenkins jobs, each for iTrust and checkbox, gets triggered once a push has been done on the production repo.
The post build job action runs the provision*.yml file which automatically reserves two EC2 instances and inturn triggers another post build job action that runs the deployment(checkbox_post.yml/iTrust.yml) playbooks to auto install iTrust and checkbox.io application on each of the two instances respectively. 


# Infrastructure Upgrade

### Nomad Cluster
Nomad effectively shedules jobs for nodes present within a cluster( nomad-clients and nomad servers). It is the nomad-server that would execute schedule the job amongst the clients and specifics of the job to be scheduled is in our case running the node server.js command.
The steps taken are explained as below-
1) Execute createEc2.yml which spawns 3 ec2 instances in the same VPC with the trust(ubuntu 14.04) image and assigns them with 3 elastic ips. The elastic IP's are referrenced later in the inventory and hence determines which node is the server or client by using "node_role"
3) Execute clientAppSetup.yml that installs the binaries/dependancies required for running checkbox.io( the playbook does not execute node server.js)
3) Execute nomad.yml that installs nomad on all nodes in cluster and copies the job file( execute node server.js) onto the nomad-server. It uses the brianshumate galaxy role.

The nomad job file will execute the node server.js command on one of the nodes and when that node is killed, the nomad server realizes this and hence executes the job on the other node. The job type is the default service type.

**Reference**
* https://www.youtube.com/watch?v=4cN_2N2jq-8&feature=youtu.be
* https://github.ncsu.edu/kpresle/techtalk

### Feature Flag

The Feature used to demonstrate is the Preview Feature under Researchers-->Survey Tab in the checkbox.io web appilcation.
This Feature wil be enabled and disabled by modifying the value of previewFlag key in the Master Redis database. 
Due to the master-slave redis configuration already set up by automatically editing the /etc/redis/redis.conf file appropriately, the updated value  of the previewFlag automatically is mirrored on the redis-slave database. Hence, the end user can observe the preview feature enabled and disabled, by accessing the checkbox.io application running on the redis-slave EC2.

**Below is the snippet of the code modified in server.js(checkbox.io)**
![image](https://media.github.ncsu.edu/user/6391/files/6601656e-ca34-11e7-9fce-fc2719dda4d2)

**Below is the topology used**

![featureflag](https://media.github.ncsu.edu/user/6391/files/1f2600ca-ca3c-11e7-899d-60388fb4a7a3)


# Canary Release

**Below is the topology used**

![image](https://media.github.ncsu.edu/user/6391/files/805f9220-ca3c-11e7-9595-fc54c2ca90ca)

We have enhanced the deployment of the checbox.io application by adding the feature to perform a canary release using a proxy load-balancer and routing some percentage of the traffic to the canary EC2 instance and the other to the production EC2 instance.
Once the newly deployed code on the canary causes errors, the load balancer redirects all the traffic to the prodcution checkbox.io running EC2

The steps involved here are:
* Developer first modifies the checboxio/public_html/index.html(as below) and pushes the code to canary branch of the repository

![image](https://media.github.ncsu.edu/user/6391/files/dc8417ea-ca3e-11e7-89a0-ea116c17812e)

* That triggers the jenkins canary build job and on successful build, the new code will be deployed in the canary EC2 instance
* The load balancer routes some amount of traffic on to the canary EC2 and the remaining on the production checkbox.io running EC2
* On observing alerts, the load balancer directs all the traffic to the production EC2 instance.

# Rolling Update
* In the Deployment section, iTrust is being deployed on a remote machine on EC2 using playbooks that are triggered by Jenkins jobs. Similarly five instances of iTrust are being deployed using the Jenkins *iTrust* job, that triggers the iTrust.yaml file in the Rolling-Updates folder, but this time it was deployed on Microsoft Azure.
* The job that deploys iTrust picks an IP address under the section [mysqlserver] from the inventory file and runs a centralized MySql database on that host for all the instances. 
* The Jenkins job *iTrust-Rolling* is a job that deploys updates on the running iTrust instances, one after the other, so that there are atleast 4 operational iTrust instances all the time. The job uses a playbook *iTrustroll.yaml* in its build to reploy iTrust on all 5 instances, sequentially one after the other on a git push to the production git repo with new code.

# Screencasts

* **Deployment**     https://youtu.be/whdO3UlxoZw
* **Nomad-Job**      https://youtu.be/CftiuSjXZcI
* **Feature Flag**   http://youtu.be/tKDSOflHtGA?hd=1
* **Canary Release** https://youtu.be/Kj5e7-FwHwU
* **Rolling Update** https://youtu.be/TQRf9I4aon4
