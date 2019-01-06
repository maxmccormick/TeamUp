# TeamUp

# TeamUp

Welcome to the TeamUp app, by Max McCormick.

To get started, you will need to do the following:



--- Install node.js ---

The first thing to do is to ensure that you have node.js installed. At the time of writing, node 8 is the latest stable release, and is recommended (although node 10 should work just fine as well).

You may already have watchman installed: type node -v in the terminal and see if it returns the version number. If you don't have node installed, head over to https://nodejs.org/en/download/ to download and install a copy.



--- Install the Expo mobile app ---

The Expo mobile app allows you to connect to and view your app on your mobile device.

To run Expo, you need one of the following devices:

An iPhone running iOS 11 or later
An Android phone running Android 6.0 (Marshmallow) or later
To install the app, go to the App Store or Google Play Store on your device, and search for 'Expo'.



--- Install the Expo CLI ---

The Expo CLI is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code.

Install it with npm:

npm install -g expo-cli



--- Next ---

Then, cd to the project directory and run:

npm install
npm start

Almost immediately, you should see a page opened in your web browser. This is the Expo Developer Tools window. Eventually, this window will present a QR code.

Now, go to your device and do the following:

Firstly, make sure your device is on the same WiFi network as your computer. The Expo app needs to be able to 'see' your computer, which means they must both be on the same network.
If you have an iPhone:
Open to the camera app and point the camera at the QR code.
A notification should appear at the top of the screen, asking if you want to open the link in the Expo app. (Note that you must have iOS 11 or later for this to work).
Tap the notification, the Expo app will open and will begin to load your app.
If you have an Android phone:
Open the Expo app and tap the 'Scan QR code' link.
Point the camera at the QR code. It will scan and open the app.