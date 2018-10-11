Polyrides React-Native
=============

The frontend of PolyRides, an app for delivering Kari to her dick appointments.

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
    - Watchman keeps track of changes in your files; when we build front end, Watchman builds and updates our app on the simulator without us manually building/refreshing the app everytime.

### Simulators
