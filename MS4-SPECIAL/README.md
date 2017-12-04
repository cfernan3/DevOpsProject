## DevOps Special Milestone

## Cloud Migration Assessment Framework

Many start-ups and well-established companies are exploring the possibility of migrating their application onto cloud. The primary reason being  to reduce the cost on infrastructure deployment, operations and maintenance. The other reason being the auto scaling feature and flexibility provided by cloud providers.

Cloud is the latest buzz in the technology world and every one wants to be a part of it. However, are all applications easily migrated to cloud? The answer is no. There are certain applications that need extensive changes in the architecture, networking, storage and also, its security components before being migrated. Moreover, various government regulations and compliance can also hinder the migration of the application onto cloud. How can the companies validate their application to check if it is cloud ready? That is what we are trying to answer.

We have developed a cloud migration feasibility assessment framework that asks the solution architect of the company a set of questions pertaining to the existing architectural desing and requirements of the application. For every answer a score is generated and at the end of the assessment, based on the overall score, the user is informed if the applciation is cloud-ready on the basis of Compute,Networking,Storage, App Architecture, Security and Compliance requirements.
 

### Implementation

A [google form](https://docs.google.com/forms/d/e/1FAIpQLSfQZN2ky9q9jCyHIQFXNMgT7D4Kl0tL7dMqAI-tediOzcnUCQ/viewform) is used to fetch the details from the user and the responses are fed to an appscript to determine the feasibility of workload migration over to the cloud. Post completion of the assessment, an email is send to the user notifying if the application is cloud ready or not.

The flow of the appscript is as per the below tree diagram: ![Cloud readiness Flow diagram](https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone4/MS4-SPECIAL/Cloud%20readiness%20diagram.jpg)

The script calculates the score for various aspects of the application. The minimum score is 0 and maximum score is 100. It also, generates various pictographic representations like bar graphs and pie charts based on the previous inputs from other users, which would assist the user in choosing from the various possible solutions.

We carried out sample assessment of various companies as follows
![image](https://media.github.ncsu.edu/user/6391/files/5cef7d2c-d857-11e7-90c7-8395e4a03d09)


The major factors deciding the feasibility of migration of the application onto cloud are as follows:
* **Compute requirement:**

Compute resource is an integral part of any applciation and its requirement is one of the significant deciding factor. There are some applicaitons that require specialised hardware or non x86 compute resource. The cloud providers, have varied types of compute resource , however a specific specialised compute resource would not be at their disposal yet. Below is the tree for Compute used in appscript

![screenshot from 2017-12-03 19-21-27](https://media.github.ncsu.edu/user/7412/files/7f8b2f2c-d85f-11e7-8707-db5d1f677cb9)


In addition, we carried out sample assessment and below are the summarised reponses for compute

 ![image](https://media.github.ncsu.edu/user/6391/files/1fa908d2-d854-11e7-8478-2b40e61072d8)
        
 ![image](https://media.github.ncsu.edu/user/6391/files/5c5eb34e-d863-11e7-8dfb-3654e7f09ea2)


* **Network requirement:**

Network resource is another integral part of any applciation and its requirement is one of the significant deciding factor. There are some applicaitons that require IPv6/multicast addressing scheme/VPN/High bandwidth due to large number of transactions per second etc. Below is the tree for Network used in appscript

![image](https://media.github.ncsu.edu/user/7412/files/eb74839a-d85b-11e7-9640-9b95c9834859)

In addition, we carried out sample assessment and below are the summarised responses for network

![image](https://media.github.ncsu.edu/user/6391/files/9e5a1074-d857-11e7-85df-0da53e966d18)

![image](https://media.github.ncsu.edu/user/6391/files/abada268-d857-11e7-827d-e72c300f99aa)

![image](https://media.github.ncsu.edu/user/6391/files/b82906ea-d857-11e7-9fc5-ba11875d10c6)



* **Storage requirement:**

Applications use application storage for a variety of purposes. They can store small data files (such as custom settings), and large files for applications that have graphically intensive features (such as games, maps, and images). Some applications that access large databases require quick and optimised storage techniques. Some of the factors that are to be considered while making any storage decisions would be whether to normalize databases, to choose between SAN and NAS storage, if the data needs to be backed up reqularly etc. Below is the tree for Storage used in appscript:

![image](https://media.github.ncsu.edu/user/7412/files/b2d8c442-d85b-11e7-9c0a-4f8b7129f451)

In addition, we carried out sample assessment and below are the summarised responses for Storage:

![image](https://media.github.ncsu.edu/user/6391/files/fc6687d0-d85f-11e7-9c22-e253737ca864)

![image](https://media.github.ncsu.edu/user/6391/files/1f3bc216-d860-11e7-9492-256548214cb5)

![image](https://media.github.ncsu.edu/user/6391/files/2ca45c74-d860-11e7-84b2-993fe55c167c)


* **Application architecture:**

Applications could be either monolithic or distributed in nature. For most applications, that are distributed in general, communication between various services offered by the application and also between the various servers must be synchronized, allowing minimum latency for the inter-service communications. For an application to provide 24/7 uptime, it is desired that there must be redundant servers offering the same service. Message queues, RPC calls, Request/Response format messages are generally used for communication between various service APIs of the application. Below is the tree for Application Architecture used in appscript:

![image](https://media.github.ncsu.edu/user/7412/files/49d90388-d85d-11e7-8f94-c0d0a3034f2b)

In addition, we carried out sample assessment and below are the summarised responses for Application Architecture:

![image](https://media.github.ncsu.edu/user/6391/files/4dcfc97e-d860-11e7-9d52-3f02aabf6935)

![image](https://media.github.ncsu.edu/user/6391/files/5d11955c-d860-11e7-8597-2c2452f8a14b)

![image](https://media.github.ncsu.edu/user/6391/files/69b97ce8-d860-11e7-84b8-81a6c7160474)


* **Security & Compliance:**
Some of the applications have to comply with the government regulations that may prohibit storage or replication of data (for Disaster Recovery) outside the country or a particular continent. Below is the tree for Storage used in appscript:

![image](https://media.github.ncsu.edu/user/7412/files/02a12e5e-d863-11e7-888f-55ad0fde56f2)

In addition, we carried out sample assessment and below are the summarised reponses for Security & Compliance

![image](https://media.github.ncsu.edu/user/6391/files/28b28864-d862-11e7-9faa-d5fcdca1eccf)

![image](https://media.github.ncsu.edu/user/6391/files/4883801c-d862-11e7-8ef3-632d520d838b)


## Example of checkbox.io application's Cloud Migration Assessment

![image](https://media.github.ncsu.edu/user/6391/files/bca262aa-d863-11e7-9b59-66c7c9340c36)

![image](https://media.github.ncsu.edu/user/6391/files/d0acef22-d863-11e7-9fb1-4f974518c2f8)

![image](https://media.github.ncsu.edu/user/6391/files/e5adf966-d863-11e7-9e65-85b873ee2143)

![image](https://media.github.ncsu.edu/user/6391/files/26b998a2-d864-11e7-81aa-6f2e24d13613)

![image](https://media.github.ncsu.edu/user/6391/files/d7b9afc4-d865-11e7-8a54-4fd855489313)

![image](https://media.github.ncsu.edu/user/6391/files/f220ecec-d865-11e7-9855-f6819205714e)

![image](https://media.github.ncsu.edu/user/6391/files/063d1840-d866-11e7-9f36-3f29b1e43bff)

![image](https://media.github.ncsu.edu/user/6391/files/1c34f6ea-d866-11e7-83c6-f8c66b550e40)

*The email was received from dppynada@ncsu.edu because the G Suite was created using the same email address*

Checkbox.io application is not production cloud ready. The factors that impede the migration are(as per the response)
* The lack of queueing stategy(in storage)
* A normalised SQL database to keep track of users information like credentials(in storage) 

## Project Presentation:

.pdf version of the project presentation - ![DevOps Pipeline.pdf](https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone4/MS4-SPECIAL/DevOps%20Pipeline.pdf)

.pptx version of the project presentation - ![DevOps Pipeline.pptx](https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone4/MS4-SPECIAL/DevOps%20Pipeline.pptx)

## Project Demo - Screencast:
 
 Please find the demo of the Special Milestone at https://youtu.be/OOkvr5I3yS4
