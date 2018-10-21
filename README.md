Polyrides React-Native
=============

The frontend of PolyRides, an app for driver and passenger long distance ride hailing.

## Getting Started
### Development Environment
As of right now, I only know how to set-up the development environment for MacOS, so here it is:

- [Brew](https://brew.sh/)
    - You will be using Brew to install some of the dependencies 
    - After installing brew, use brew to install node and watchman.
        ```bash
        $ brew install node
        $ brew install watchman
        ```
- [Node](https://nodejs.org/en/about/)
    - Since react-native is written in Javascript, we need a JS runtime environment.

- [Watchman](https://facebook.github.io/watchman/)
    - Watchman keeps track of changes in your files; while you are working on the front end, Watchman will build and update the app on the simulator so you don't need to build/refresh the app manually everytime.
 
- [Xcode](https://developer.apple.com/xcode/)
    - This is an IDE for iOS (Swift/Objective C) and how we will be simulating our app (Only for MacOS).

- [React-Native CLI](https://facebook.github.io/react-native/)
    - This is the CLI for the framework we are using for developing the frontend, install it using `npm`:
        ```bash
        $ npm install -g react-native-cli
        ```

### iOS Simulator 

1. Clone the repo:
    ```bash
    $ pwd
    /path/to/workspace/
    $ git clone git@github.com:oliverwang101/polyrides-mobile.git
    $ cd polyrides-mobile
    $ ls
    App.js			app.json		node_modules
    README.md		index.js		package-lock.json
    android			ios			 package.json
    ```
2. Start the Metro Bundler:
    ```bash
    $ pwd
    /path/to/workspace/polyrides-mobile
    $ react-native start --reset-cache
    ┌──────────────────────────────────────────────────────────────────────────────┐
    │                                                                              │
    │  Running Metro Bundler on port 8081.                                         │
    │                                                                              │
    │  Keep Metro running while developing on any JS projects. Feel free to        │
    │  close this tab and run your own Metro instance if you prefer.               │
    │                                                                              │
    │  https://github.com/facebook/react-native                                    │
    │                                                                              │
    └──────────────────────────────────────────────────────────────────────────────┘
    ```
    Metro is a packager that compiles all your Javascript code into a single file. It translates/converts any code that your device (iOS) may not be able to understand. It also converts assets (.PNG) into objects.

3. Launch the simulator via terminal:
    ```bash
    $ react-native run-ios
    ```
4. IF #3 DOESN'T WORK, locate to the following directory (may be due to a dependency version conflict)
    ```bash
    $ pwd
    xx/xx/Workspace/polyridesMobile/ios
    $ ls
    build				polyridesMobile-tvOSTests
    polyridesMobile			polyridesMobile.xcodeproj
    polyridesMobile-tvOS		polyridesMobileTests
    ```
    Notice that there is a file called polyridesMobile.xcodeproj, directly run that to open the native version in xCode
    ```bash
    $ open polyridesMobile.xcodeproj
    ```
    Note: it make take some time to build, if so, just let it be. If it doesn't build right away, press the upper left play button to start building + launch the simulator.
