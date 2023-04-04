# BPHC URL Shortner
A simple application for students of BPHC to generate short URLs for long URLs carrying BPHC in the smaller URLs name.

## Stack
1. ReactJS
2. Firebase
3. Render for deployment

## Local Development
To develop locally you will need a Firebase project to begin. Create project then follow the instructions.

To run locally, first get the source by running the following commands:
1. `git clone https://github.com/sanchitkalra/bphc-url-shortner.git`
2. `cd bphc-url-shortner`

Firstly, create a web app within your Firebase project and copy the configuration Firebase gives you.
Now, create a file `/src/firebaseConfig.js` and default export a single variable `firebaseConfig` from that file where the variable is an object that holds your Firebase App configuration. 

Now run the project with:
1. `yarn` 
2. `yarn dev` 
