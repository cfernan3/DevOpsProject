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
The Jenkins jobs, each for iTrust and checkbox, gets triggered once a push has been done onthe prodcution repo.
The post build job action runs the provision*.yml file which automatically reserves two EC2 instances and inturn triggers another post build job action that runs the deployment playbook to auto install iTrust and checkbox.io application on each of the two instances respectively. 


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
Due to the master-slave redis configuration already set up by editing the /etc/redis/redis.conf file appropriately, the updated value  of the previewFlag automatically is mirrored on the redis-slave database. Hence, the end user can observe the preview feature enabled and disabled, by accessing the checkbox.io application running on the redis-slave EC2.

***Below is the snippet of the code modified in server.js(checkbox.io)***
![image](https://media.github.ncsu.edu/user/6391/files/6601656e-ca34-11e7-9fce-fc2719dda4d2)


# Canary Release

# Rolling Update


# Screencasts

## Deployment
https://youtu.be/whdO3UlxoZw

## Nomad-Job
https://youtu.be/CftiuSjXZcI

## Feature Flag
http://youtu.be/tKDSOflHtGA?hd=1

## Canary Release
https://youtu.be/Kj5e7-FwHwU

## Rolling Update
https://youtu.be/TQRf9I4aon4
