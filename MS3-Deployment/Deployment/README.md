## Team
* Calvin Fernando (cfernan3)
* Davis Pynadath (dppynada)
* Jeris Alan Jawahar (jjawaha)
* Revanth Pathuri (rpathur)

# Environment

<img width="429" alt="screen shot 2017-11-08 at 10 45 41 pm" src="https://media.github.ncsu.edu/user/6181/files/0d153fc0-c566-11e7-9fd5-e5414261fb3a">\
# Files

* configuration.yml file configures 
    * jenkins server 
    * creates jobs for checkbox.io and iTrust
    
    
* checkbox.io folder contains the yml files for provisioning a prod instance AWS and also to deploy code.
* iTrust folder contains the yml files for provisioning a prod instance AWS and also to deploy code.



# Pre-requisites

 * edit inventory file to point to the public ip (jenkins server)
 * edit the inventory files inside the checkbox.io folder to point to the EC2 instances for stable as well as canary.
 * edit the provision yml files inside the checkbox.io folder for access key, secret key, ami id etc.
 * repeat the same thing for iTrust
