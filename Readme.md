# React Native Demo App

## Installation:
* To clone this project click on this [link](https://github.com/aditmodi/react-native-boiler-plate/tree/Auth2)
* After cloning run `` npm install `` in your terminal
* Then run ``react-native link`` to automatically link your libraries with the project

**Note: Some libraries might need manual installation and linking too. For that refer the links given in third party libraries section**
* If you wish to start the project from the start follow this [link](https://facebook.github.io/react-native/docs/getting-started.html) to set up the environment for react native on your system from the beginning

## Description:
This is demo app to get the basic understanding of building an app on react-native for both platforms - Android and iOS. It has the following features:

#### Functionality
* A simple app including login, logout and signup feature
* It also includes a camera access functionality where the user can access the phones camera and capture the images
* After capturing the picture they can even upload it on the cloud and view it in the app itself
* The order of the image view are by date, i.e., the picture clicked latest will be on top.
#### Screens
##### Sign-In (ref: root_directory/app/screens/signIn.js) :
* This page will open everytime when the app in device is opened for the first time and then it will open when a user logs out of the app
* Everytime when a user will sign-in, a token will be generated which will be there when the user will open the application next time and will staright be directed to the home page
##### Sign-Up (ref: root_directory/app/screens/signUp.js) :
* A non-exisitng user will access the page and its link will be there on the sign-in page
* Candidate will fill a form providing his/her details
* Every field will be validated for the syntax
##### Home (ref: root_directory/app/screens/home.js) :
* This page will open everytime an existing user opens the application
* It has sidemenu which will navigate us through other screens - home, profile and logout
* When the user will click on logout the token will be destroyed
##### Profile (ref: root_directory/app/screens/profile.js) :
* This is the page where the action of capturing images or viewing the captured images
##### Camera (ref: root_directory/app/screens/camera.js) :
* This is the screen where camera opens taking permissions the first time a user access this page through his account
* Here the image is captured and asked for whether to upload it or not
##### Images (ref: root_directory/app/screens/images.js) :
* Here all the images belonging to the user will be shown

## Third-party libraries
* [cloudinary](https://www.npmjs.com/package/cloudinary)
* [native-base](https://docs.nativebase.io/docs/GetStarted.html)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [react-native-camera](https://github.com/lwansbrough/react-native-camera)
* [react-native-fs](https://github.com/itinance/react-native-fs)
* [react-native-side-menu](https://github.com/react-native-community/react-native-side-menu)
* [react-native-simple-radio-button](https://github.com/moschan/react-native-simple-radio-button)
* [react-navigation](https://www.npmjs.com/package/react-navigation)

## Components used
#### React-native
* Text
* View
* StyleSheet
* TouchableOpacity
* KeyboardAvoidingView
* Image
* ScrollView
* AsyncStorage
* Alert

#### Native-Base
* Header
* Left
* Right
* Title
* Icon
* Body
* Title
* Button
* Item
* Label
* Container
* Content
* Form


## End notes

* To make release Apk for you app refer this [link](https://facebook.github.io/react-native/docs/signed-apk-android.html)
* To see the server side of this project refer to this [link](https://github.com/aditmodi/react-native-boiler-plate/tree/Auth2_server)
* For any query, comment down
