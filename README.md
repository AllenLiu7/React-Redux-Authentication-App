## React Redux Authentication App
This app is a simple authentication app built by React, Redux-Saga, PassportJS and MongoDB. User can register an account and use email and password to login or use Google or Facebook Oauth to login and reveal the secret page. All user credentials will be stored at MongoDB, including the google id and facebook id that come with the oauth response. Authorized users can have persist login with the help of express session. The structure of this app is set up using React, Redux and Redux-Saga. It can easily be set as the starting point for a large React project that needs to have a system to manage users.

## Installation
Since this app has both client side and server side code, to install, run

````bash
npm run install-all
````

## Environment Varialbes
These are environment variables you need to set up in order the run this app.
````javascript
//the uri to connect to a mongodb database
MONGO_URI

//the google id and secret for google OAuth 2.0 from your own google cloud platform
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET

//the facbook id and secret for facebook OAuth from your own facebook cloud platform
FACEBOOK_CLIENT_ID
FACEBOOK_CLIENT_SECRET

//set the session secret for the authentication as you like
SESSION_SECRET
````
## Usage
````bash
npm run dev
````
