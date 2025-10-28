Welcome to my Personal-Portfolio
How to access it?
Use this link -> archivedbyaqil.com

CI-CD On this project
How it works
There are 3 EC2 instances hosted on AWS that manage the integration and deployment.
The Jenkins EC2 handles the processing of the pipeline from testing the code by passing it into the SonarQube EC2 as well as deploying the code on the Docker EC2.
SonarQube tests the code by scanning for security vulnerabilities and code smells
Docker depoloys the code by creating an image and building the container on the EC2 for it to be viewable to the world
Screenshots of the workflow
alt text
alt text
S