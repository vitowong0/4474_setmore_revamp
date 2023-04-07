# SetmoreRevamp
Final project for Computer Science 4474 - Human Computer Interaction, at Western University.

Our project is to improve the user's experience with _Setmore_, a popular service booking app. We want to make it easier for the customer to browse, select, and book appointments. At the moment, they lack a customer app - so we are creating one. 

## Installation
We are using React Native for cross-platform functionality. We set up our app using the instructions for _React Native CLI Quickstart_. For our Macs, we followed React Native CLI Quickstart > macOS > iOS.

Follow the documentation here: https://reactnative.dev/docs/environment-setup

**IMPORTANT:** Ensure the test app _AwesomeProject_ is functional before moving onto the next steps.

## Usage
1. Clone this repo onto your local machine. 

2. In your IDE of choice, we used Visual Studio Code, `cd` into `./SetmoreRevamp`. You should now be in the same directory level as _screens_, _constants_, _components_, etc...

2. Open a new terminal of your choice within your IDE and run `npx react-native start`. Assuming you followed the above environment setup documentation, the Metro bundler should begin. This terminal will show all warnings and errors, and any console.log() from our app will appear here.

    **- iOS simualtor:** Open another new terminal within VSCode and run `npx react-native run-ios`. You can specify what iOS device you want to run, e.g.: `npx react-native run-ios --simulator="iPhone 14 Pro"`
    
    **- Android simulator:** Open another new terminal within VSCode and run `npx react-native run-android`.

3. A simulator should launch but you may get errors saying you are missing packages. For example, you may be missing the _react-native-reanimated_ package. To install this package, a quick Google search shows the command to be: `npm install react-native-reanimated`. This tends to be the case for most missing packages.

4. After successful install of all packages, the app should launch onto its Home Screen. 

## Credits (Group 20)
1. Vito Wong
2. Xiaoyun Bonato
3. Chris Gonzalez
4. Artiem Babaryko
