## DevOps Special Milestone

## Cloud Migration Assessment Framework

Many start-ups and well-established companies are exploring the possibility of migrating their application onto cloud. The primary reason being  to reduce the cost on infrastructure deployment, operations and maintenance. The other reason being the auto scaling feature and flexibility provided by cloud providers.

Cloud is the latest buzz in the technology world and every one wants to be a part of it. However, are all applications easily migrated to cloud? The answer is no. There are certain applications that need extensive changes in the architecture, networking, storage and also, its security components before being migrated. Moreover, various government regulations and compliance can also hinder the migration of the application onto cloud. How can the companies validate their application to check if it is cloud ready? That is what we are trying to answer.

We have developed a cloud migration feasibility assessment framework that asks the solution architect of the company a set of questions pertaining to the existing architectural desing and requirements of the application. For every answer a score is generated and at the end of the assessment, based on the overall score, the user is informed if the applciation is cloud-ready on the basis of Compute,Networking,Storage, App Architecture, Security and Compliance requirements.
 

### Implementation

A [google form](https://docs.google.com/forms/d/e/1FAIpQLSfQZN2ky9q9jCyHIQFXNMgT7D4Kl0tL7dMqAI-tediOzcnUCQ/viewform) is used to fetch the details from the user and the responses are fed to an appscript to determine the feasibility of workload migration over to the cloud. Post completion of the assessment, an email is send to the user notifying if the application is cloud ready or not.

The flow of the appscript is as per the below tree diagram: ![Cloud readiness Flow diagram](https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone4/MS4-SPECIAL/Cloud%20readiness%20diagram.jpg)


The major factors deciding the feasibility of migration of the application onto cloud are as follows:
* **Compute requirement:**
Compute resource is an integral part of any applciation and its requirement is one of the significant deciding factor. There are some applicaitons that require specialised hardware or non x86 compute resource. The cloud providers, have varied types of compute resource , however a specific specialised compute resource would not be at their disposal yet. Below is the tree for Compute used in appscript





In addition, we carried out 28 sample assessment and below are the summarised reponses for compute

 ![image](https://media.github.ncsu.edu/user/6391/files/1fa908d2-d854-11e7-8478-2b40e61072d8)
     
     
 ![image](https://media.github.ncsu.edu/user/6391/files/3573caf8-d854-11e7-8a7b-1a840d0c7586)




* **Network requirement**

* **Storage requirement**

* **Security & Compliance**

* **Application architecture**

The script calculates the score for various aspects of the application. It also, generates various pictographic representations like bar graphs and pie charts based on the previous inputs from other users, which would assist the user in choosing from the various possible solutions.


## Project Presentation:

.pdf version of the project presentation - ![DevOps Pipeline.pdf](https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone4/MS4-SPECIAL/DevOps%20Pipeline.pdf)

.pptx version of the project presentation - ![DevOps Pipeline.pptx](https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone4/MS4-SPECIAL/DevOps%20Pipeline.pptx)

## Project Demo - Screencast:
 
 Please find the demo of the Special Milestone at https://youtu.be/OOkvr5I3yS4
