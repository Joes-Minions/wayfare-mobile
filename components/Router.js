import React from 'react'
import { Scene, Router, Tabs, Stack, Drawer, ActionConst, Actions } from 'react-native-router-flux'
import { Text } from 'react-native';
import Dashboard from './Dashboard'
import LandingAuth from './landing/LandingAuth'
import Landing from './landing/Landing'
import LandingGetStarted from './landing/LandingGetStarted'
import SideMenu from './SideMenu';
import FindRide from './FindRide';

import Account from './Account';
import { SideMenuButton } from './common';


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
               
                <Scene key='main' panHandlers={null}>
                    
                    <Drawer
                        key="drawerMenu"
                        contentComponent={SideMenu}
                        type='reset'
                        hideNavBar
                    >   

                        <Scene key="dashboard" hideNavBar panHandlers={null}>
                            <Tabs
                                key="tabbar"
                            >
                                <Stack title='asd'>
                                    <Scene key="tab1" component={FindRide} />

                                </Stack>
                                <Stack>
                                    <Scene key="tab2" component={FindRide} />
                                </Stack>
                            {
                            }
                            </Tabs>
                            <Scene
                                key='account'
                                component={Account}
                                title='account'
                                back
                                onBack={()=>Actions.pop()}
                                panHandlers
                            />
                        </Scene>
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
