# liri-node-app1

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Methodolgy

I created a node.js app called LIRI. LIRI is like SIRI, is a Language Interpretation and Recognition Interface.

It must be ran in the command line.

LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will do any of the below command when you enter them into the command line.

my-tweets
spotify-this-song
movie-this
do-what-it-says

Technologies Used
Node.js
JavaScript
Twitter API (via twitter npm module)
Spotify API (via spotify npm module)
OMDb API (via request npm module)

Example: To show my latest tweets:
node liri.js my-tweets

Valdineias-MBP:liri-node-app1 valsignorelli$ node liri.js my-tweets
@Valdine72858626: "Every person who does an act of goodness will be motivated to extend the chain of goodness forward"  Divaldo Franco
Thu Jul 19 14:06:34 +0000 2018
------------------------------ 0 ------------------------------

@Valdine72858626: going out for dinner tonight!
Wed Jul 18 20:40:06 +0000 2018
------------------------------ 1 ------------------------------

@Valdine72858626: XD problems Wednesday!!!!
Wed Jul 18 20:39:23 +0000 2018
------------------------------ 2 ------------------------------

@Valdine72858626: My favorite artist https://t.co/mJGsp0QhYj
Tue Jul 17 22:23:43 +0000 2018
------------------------------ 3 ------------------------------

@Valdine72858626: class time! let's learn some Node.js
Tue Jul 17 22:22:22 +0000 2018
------------------------------ 4 ------------------------------

@Valdine72858626: Anybody got good deals on Prime Day so far??
Tue Jul 17 18:49:20 +0000 2018
------------------------------ 5 ------------------------------

When the other commands are typed, the info will show and also will log the Results in the random.txt file.
