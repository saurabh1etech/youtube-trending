# YouTube Trending

A web application to scrap the popular videos from Youtube, save them into the database, and list down the video on a webpage from the database.

# Requirements

1. Node should be installed in your system https://nodejs.org/en/download/ 
2. Create google API Key to access the YouTube APIs https://developers.google.com/maps/documentation/javascript/get-api-key
3. Angular.js library for frontend https://angularjs.org/
4. Install MongoDB in your system from here https://docs.mongodb.com/manual/installation/

# Installation (Backend Node.js)

1. Download the zip file and extract files in your system
2. Run NPM install in your root directory
3. Create a local database with name "youtube" with a document name "videos"
4. Go to the file config.env and replace the replace the API_KEY with the one you created before
5. oprn CLI and Run command node server.js  

# Frontend (Angular.js, jquery, html, css)

1. Run the file youtube-trending.html file in the browser


# Functionality

1. Refresh Video List Button : To insert or update videos in the mongoDB database
2. Table containing all the trending video list (Change the VIDEOS_COUNT in config.env)
3. Action column : A popup will be open when click on View Details link containing details like "video title", "description", "video URL", "video thumbnail" in all available sizes, "video view count", "likes" and "dislike" count, channel title, channel description, channel thumbnail in all available sizes and channel subscribers.

