# Alloy Project

The Alloy project is a React.JS based application, developed as a learning method to increase my knowledge in the React technology. 

The full project is yet to be completed, since Alloy is only a half of the full idea. The continuation of this project will be delivered alogside the Super project, a React Native application made for the management of clients and products displayed on the Alloy website.

## Setup Guide

To install and run the Alloy project, there are some requirements to be attended before starting the application:
- Node.JS + NPM.
- Java 17.
- An IDE to run the java code, such as IntelliJ or VSCode.

<br>

After cloning the project, follow the instructions listed below:
1. In the root folder of the project, create a .env file and paste the following code:
   ```js
      REACT_APP_API_URL="http://localhost:8080"
   ```
2. Go to the backend>src>main>java>com>accenture>backend>BackendApplication.java and click on the "run" button.
3. On the root folder of the project, open a new terminal and type the following command:
   ```cmd
     npm start --refresh-cache
   ```
4. All done, your project should be able to work without further issues.
