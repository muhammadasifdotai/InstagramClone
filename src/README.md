## Instagram Clone

# Project Setup

# 2.1 Initialize the React Native project

1. First create the folder, in the folder right click and open terminal.

2. React Native CLI Project command

npx react-native@latest init InstagramClone

npx react-native@latest : In order to get the latext vervision of React Native.

init : To initialize

InstagramClone: Name of Project

3. Then do this ( cd InstagramClone) for going to project directory.
4. Then this (code .) for open the VS Code.
5. open the terminal with (Ctrl + `) comand
6. File Structure: i. index.js: is the entery point of our application.
7. Project Structure and Folder Structure: that we're going to use throughout the rest of the code, so I like to keep all the source code in a separate folder called 'src', because in root directory we have lots of files, ii. In the 'src' we have three important folders i. assets ii. components iii. screens
   i. assets: we keep all important folder inside the folder.e.g: fonts, images.
   ii. components: in which keep reusesable components for different parts and screens e.g: post component
   iii. screens: Similar to component only difference is that we will keep here only the logic for the screens. e.g: homeScreen, authenticationScreen.
8. also clear 'babel.config.js' and paste this 'module.exports = {
   presets: [
   [
   'module:metro-react-native-babel-preset',
   {useTransformReactJSXExperimental: true},
   ],
   ],
   plugins: [
   [
   '@babel/plugin-transform-react-jsx',
   {
   runtime: 'automatic',
   },
   ],
   ],
   };' in to it.
   by this we not need to add this in our project 'import React from 'react''.

# 2.2 Theme (colors & fonts):

- In bigger applications, it is recommended to centralise all the values for colors, fonts and other things that might change in the application.
- so in the scr create a folder called theme and in which add file colors.ts

# 2.3 Vector icons

- yarn add react-native-vector-icons

# 2.4 Git

- git init
- git status

* git add . ( dot means everything)
* git commit -m 'initialize project & install vector icons'

# Props:

- In which we send data from parent to child.
