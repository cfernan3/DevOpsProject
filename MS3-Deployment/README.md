# DevOpsProject

## Team
* Abhishek Bandarupalle (abandar)
* Calvin Fernando (cfernan3)
* Davis Pynadath (dppynada)
* Revanth Pathuri (rpathur)


Milestone1: https://github.ncsu.edu/rpathur/DevOpsProject/tree/master/MS1-ConfigurationManagement

Milestone2: https://github.ncsu.edu/rpathur/DevOpsProject/tree/Milestone2/MS2-TestAnalysis

# Prerequisites

* Add the public IP of the EC2 instance in the inventory file
* Add the ssh key file to log into the EC2 instance in the inventory file
* Add the public IP for the EC2 instances for iTrust and checkbox in the inventory files 
* Add the Access key and secret key in the Provision*.yml files


# Deployment

# Infrastructure Upgrade

### Nomad Cluster

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
