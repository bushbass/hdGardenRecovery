# hdGardenRecovery

# working demo
https://hd-garden-recovery.netlify.app/

A single page React app to help with garden recovery at the big box hardware store. When I have to bring in 20 or so pallets of various materials it's easy to lose track of how many of each I've brought in. This allows me to keep track with single button clicks.

I will be adding user authentication next so it can be used by other associates in other stores.

Skills: HTML | CSS | JavaScript | React
Hosted on Netlify

# how to run this app locally
backend and frontend run seperately
change to backend folder
    "npm run dev"   
    you will have to create a .env file with a "MONGO_URI" environment variable linking to your own mongo DB
in a seperate terminal, change to frontend folder 
    npm start
    you will need a .env in the frontend folder as well with "REACT_APP_BACKEND_URL" set to wherever you're running your backend
