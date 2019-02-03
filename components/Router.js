import React from 'react'
import { Scene, Router, Tabs, Stack, Drawer, ActionConst } from 'react-native-router-flux'
import { Text } from 'react-native';
import Dashboard from './Dashboard'
import LandingAuth from './landing/LandingAuth'
import Landing from './landing/Landing'
import LandingGetStarted from './landing/LandingGetStarted'
import SideMenu from './SideMenu';
import Account from './Account';


/**
 * Component for managing Routing/navigation within this App.
 * Passed to index.js instead of App
 */


const RouterComponent = () => {
 
    return (
        <Router>
            <Stack key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene
                        key='landing'
                        component={Landing}
                        title="Welcome!"
                        titleStyle={styles.titleStyle}
                        navigationBarStyle={styles.navbarAuthStyle}
                        initial
                    />
                    <Scene 
                        key='landingAuth' 
                        component={LandingAuth}
                        back
                        title="WayFare"
                        titleStyle={styles.titleStyle}
                        navigationBarStyle={styles.navbarAuthStyle}
                        navBarButtonColor='#E4EDF2'
                    />
                    <Scene  
                        key="findRide"
                        component={LandingGetStarted}
                        back
                        title="Get Started"
                    />
                </Scene>
                <Scene key='main'>
                    <Drawer
                        key="drawerMenu"
                        contentComponent={SideMenu}
                        type={ActionConst.RESET}
                        hideNavBar
                    >
                        <Scene
                            key='dashboard'
                            component={Dashboard}
                            title='WayFare'
                            //titleStyle={styles.titleStyle}
                            //navigationBarStyle={styles.navbarAuthStyle}
                            hideNavBar
                        />
                        <Scene
                            key="account"
                            title="Your Account"
                            component={Account}
                            hideNavBar
                        />
                    </Drawer>
                </Scene>
            </Stack>
        </Router>
    )
}

const colors = {
    whiteBlue: '#E4EDF2',
    wayfareBlue: '#1D394B'
};

const styles = {
    titleStyle: {
        color: 'white',
        fontSize: 18
    },
    navbarAuthStyle: {
        backgroundColor: colors.wayfareBlue
    }
}

export default RouterComponent;
