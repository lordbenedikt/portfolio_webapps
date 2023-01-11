# Find Places

Benedikt Jensen<br>
Klausurersatzleistung Webbasierte Systeme Sommersemester 2020<br>

[Heroku Link](https://http://my-single-page-app-123.herokuapp.com/)

## Table of Contents
<ol>
    <li>Manual</li>
	<li>Used APIs</li>
	<li>Vision</li>
    <li>Colors</li>
    <li>Used resources</li>
	<li>Installation</li>
</ol>

## Manual
**Important:** For the app to function location detection must be allowed.

Once on the page, simply select the desired category of place one desires to find.
Then click Get Places in order for a list of nearby places to be shown. Additionally
the weather of the coming 4 hours will be displayed.

If category 'recommended' is selected, places will be searched depending on the weather.
Is there rain, snow or thunder, only indoor locations will be found. Else places in nature,
where one might wanna take a walk will be suggested.

For each place name, distance from current location, a short description(if availabel) and a
link to display the route on google maps are listed.

Under 'Your Location' the detected location will be displayed.

## Used APIs
To create 'Find Places' mainly two APIs were utilized.

1. here.com:<br>
   Link: https://places.ls.hereapi.com/places/v1/discover/around?<<query>>
   here.com provides API that gives information about closeby locations. This includes the name,
   distance, coordinates, category and more.
2. openweathermap.org
   Link: https://api.openweathermap.org/data/2.5/onecall?<<query>>
   openweathermap.org provides information about the weather and gives a weather forecast.
   
## Vision
When one is in a place as a tourist, sometimes it is difficult to find a place to go and spend your time.
When deciding this it is also important to consider the weather. When the weather is nice, one will likely
enjoy a walk out in nature. When it's raining one might wanna go to the theater or to a shopping mall.
'Find Places' provides a weather forecast of the coming 4 hours and at the same time automatically suggests
befitting destinations all in one go!

## Colors
The color design is based on Google's material design color system.

## Used Resources
To learn about APIs and there use in a webapp I followed this tutorial on creating a weather forecast app by "Code Explained":
https://youtu.be/KqZGuzrY9D4 <br>
I used the icons provided by google material design: https://material.io/resources/icons/?style=baseline <br>
The scrollbars used in the search result section are provided by WebKit.

## Installation
This is a description on how to install and run 'Find Places' locally.
### Prerequisites
Following programs need to be installed:
1. Git
2. Node.js
3. Node package manager(npm)
### Project Installation
1. git clone https://git.thm.de/bjns11/find-places.git
2. cd find-places
3. npm install
### Getting API keys
Sign up and generate an API key on these two Websites: <br>
https://openweathermap.org/ <br>
https://developer.here.com/
### Setting up environment
1. Create a file called .env and add it to .gitignore
2. Add following variables to .env: <br>
    owpKey={your openweather.org key} <br>
    hereKey={your here.com key} <br>
    PORT={any free port}
### Server Start
1. npm start
2. access under https://localhost:{chosen port}

