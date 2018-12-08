# PlatonicMingle
Platonic Mingle is a revolutionary app designed to profoundly increase your social skills in situations where you might need the extra help. As much as we would like to know everything, we can't. We are not Google (or Bing). But now our consumers will be able to grasp the trending topics of the day, week, or month in a simple, yet effective fashion in order to prepare for an interview, search for interesting topics for a date, or even be able to seamlessly speak about how many goals the New York Dodgers were able to putt through the field-goal!

* User must set up credentials so that their personal searches are saved for themselves
* User’s home screen lists current trending topics from Twitter and Buzzfeed, allowing user to choose a favorite trend to learn more about
* User may save favorite articles to the MongoDB database

Currently in the works:
 * 'Mingle' option, where users will be matched to each other based on their profile and favorites.  Make friends without leaving the confort of your house!
 * Web-based app, in case you want to give your phone a rest

Demo of the current app:
 
![part one](demo_videos/demo_part1.gif)  ![part two](demo_videos/demo_part2.gif)

## Getting Started
Since this is a mobile app built with React-Native, only the server is deployed to Heroku [here](https://platonic-mingle.herokuapp.com/).  In order to see this app, the user will need to run the code from the [repository](https://github.com/valeriemiller5/Platonic-Mingle) locally, then use `yarn start:all` in the terminal to start the app and the server.

## Prerequisites
Google Chrome (PC) or Safari (Mac) is recommended for running this program.

## Running the tests
Logs have been set at various points in this program. To see test the code, check the command terminal for messages.

Notable issues when creating this program were conflicts with branch deployments to GitHub.  Through updates, most of these conflicts have been addressed.

## How it works
Logging in:
 
![logging in](demo_videos/sign_up.gif)

Once user has been created, their loggin credentials are saved to the database:
![user saved](demo_videos/db_screenshot_1.png)

Create a profile:
 
![create profile](demo_videos/set_profile.gif)

Once a profile is created, it is saved under the user's account in the database:
![profile saved](demo_videos/db_screenshot_2.png)

Save favorite trends:
 
![save fave](demo_videos/sav_fav.gif)

Trends and articles will automatically render.  When the heart icon is clicked, the article is saved to the favorites screen and the user's database:
![fave saved](demo_videos/db_screenshot_3.png)

COMING SOON - Mingle:
Connect with other PlatonicMingle users - make friends without actually talking to someone
 
![mingle](demo_videos/mingle.gif)


## Built With
* React-Native
* Node.js
* Express.js
* MongoDB/Mongoose
* Twitter Trends API
* Buzzfeed API

## Authors
* Front End Design – Julio Valdez
* User Authentication, BuzzFeed API, and back-end – Chad Tao
* Twitter Trends API and back-end – Valerie Flores
* Favorites – Ray Ventura


## Acknowledgments
Thank you to all the members of the PlatonicMingle team, classmates, instructor, and TA's of UC Irvine Coding Bootcamp, and the many examples of other coders online.
