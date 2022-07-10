# Graphql Service  
## Description  
Imagine we have a couple of microservices that are created for the service Musicify, a new wikipedia for Music. We need to provide a comfortable and convenient service   for our users to manage and retrieve data for different entities.  

You can find repository with microservices [here](https://github.com/rolling-scopes-school/node-graphql-service)  

## Instruction:
1. Clone repo:
 ``` powershell 
git clone git@github.com:IvanPratasevich/graphql-service.git -b dev 
```
2. To install all dependencies use npm install in the root folder
``` powershell 
npm install
```
3. Create and run MongoDB container (Mongodb image in docker should be installed beforehand)   
``` powershell
# Example
docker run -d -p 27017:27017 --name MongoDB -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:latest
```
4. Run Musicify microservices ([Installation](https://github.com/rolling-scopes-school/node-graphql-service#installation)).  

5. Run ```npm run start:dev``` to start application in development mode. 

6. Open http://localhost:3000/graphql in browser.

## Notes:  
Before starting mutations, you need to get and manually insert the jwt token as in screenshot:  

![image](https://user-images.githubusercontent.com/85807287/178156411-5bd5fe17-1990-4782-a6b5-42060daa4ae7.png)

