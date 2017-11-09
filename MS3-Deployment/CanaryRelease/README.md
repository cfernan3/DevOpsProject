## Team
* Calvin Fernando (cfernan3)
* Davis Pynadath (dppynada)
* Jeris Alan Jawahar (jjawaha)
* Revanth Pathuri (rpathur)

# Environment

<img width="612" alt="screen shot 2017-11-08 at 7 42 28 pm" src="https://media.github.ncsu.edu/user/6181/files/87726a42-c564-11e7-9129-9c6eba3f9ec3">

# Files

* configuration.yml file configures 
    * jenkins server and load balancer
    * creates jobs for both the branches (master and canary)
    
* checkbx.io folder contains the yml files for provisioning a canary instance and a stable instance in AWS.
* Also to deploy code into those two instances.


# Pre-requisites

 * edit inventory file to point to the public ip (jenkins server)
 * edit the inventory files inside the checkbox.io folder to point to the EC2 instances for stable as well as canary.
 * edit the provision yml files inside the checkbox.io folder for access key, secret key, ami id etc.
 
