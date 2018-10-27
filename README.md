# Hourglass Mobile Application

<img src = "https://github.com/ewliang/Hourglass/blob/master/screenshot.jpg" alt = "Hourglass Screenshot" width = "360px" height = "auto"/>

Hourglass is a productivity app that serves as a self-reminder how much time is left in the year in different units of time. It is a mobile application that is created using React Native via Expo.

# Repository
Hourglass Repository [https://github.com/ewliang/Hourglass](https://github.com/ewliang/Hourglass)

# Developer Setup Instructions
1. Have Node.js, NPM, and Expo.io CLI installed along with React CLI.
2. Navigate to the project root folder where the package.json file is located and run "npm install" in the command prompt.
3. To start the project, type the command "expo start". If you get an error, type the same command "expo start" again. The error will go away. Give it a few minutes to build and load up. Once done, it'll open a new window and display a QR code which you can use the official Expo app on your smartphone to scan and it'll connect to your local network and hot reload the app everytime you make a change.

# FAQ
- Help! My phone is not detecting the app on the local network! **Uncaught Error: Java.net,sockettimeoutException: failed to connect to after 10000ms**
  + The solution to this is to simply go to your command prompt. Make sure your npm process is not running. Navigate to your project's root directory again. Type in the following code:
  ````
  set REACT_NATIVE_PACKAGER_HOSTNAME = <INSERT YOUR IP ADDRESS HERE>
  ````
  Click [Enter] and then re-run the app via "expo start", perform the usual setup, and it should work this time. If you have your coding device connected via Wi-Fi, you want the IP address under that category. For me, it was along the format of 192.168.x.x 

# Author
Eric Liang
- Website [https://www.eric-liang.com](https://www.eric-liang.com)
- Github [https://www.github.com/ewliang](https://www.github.com/ewliang)

# License
This project is protected by the MIT License. More details available in the License file.
