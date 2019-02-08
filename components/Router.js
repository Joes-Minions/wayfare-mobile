import React, { Component } from 'react'
import { Scene, Router, Tabs, Stack, Drawer, ActionConst, Actions } from 'react-native-router-flux'
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Dashboard from './Dashboard'
import LandingAuth from './landing/LandingAuth'
import Landing from './landing/Landing'
import LandingGetStarted from './landing/LandingGetStarted'
import SideMenu from './SideMenu';
import FindRide from './FindRide';
import Verification from './Verification';
import Car from './Car';
import CarForm from './CarForm';
import { clearCarForm } from '../actionCreators';

import Account from './Account';
import { SideMenuButton } from './common';
import ShareRide from './ShareRide';
import CurrentRides from './CurrentRides';
import PastRides from './PastRides';


/**
 * Component for managing Routing/navigation within this App.
 * Passed to index.js instead of App
 */


class RouterComponent extends Component {
    render () {
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
                            navBarButtonColor={colors.whiteBlue}
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
                                    <Stack title='Find Ride'>
                                        <Scene key="tab1" component={FindRide} />

                                    </Stack>
                                    <Stack title='Share Ride'>
                                        <Scene key="Share Ride" component={ShareRide} />
                                    </Stack>
                                    <Stack title='CurrentRides'>
                                        <Scene key="Current Rides" component={CurrentRides} />
                                    </Stack>
                                    <Stack title='PastRides'>
                                        <Scene key="Past Rides" component={PastRides} />
                                    </Stack>
                                {
                                }
                                </Tabs>
                            </Scene>

                            <Scene
                                key='account'
                                component={Account}
                                title='account'
                                back
                                onBack={()=>Actions.pop()}
                                panHandlers
                            />

                            <Scene
                                key="verification"
                                component={Verification}
                                title="Verification"
                                titleStyle={styles.titleStyle}
                                navigationBarStyle={styles.navbarAuthStyle}
                                navBarButtonColor={colors.whiteBlue}
                                back
                                onBack={() => Actions.pop()}
                            />

                            <Scene
                                key="car"
                                component={Car}
                                title="My Car"
                                titleStyle={styles.titleStyle}
                                navigationBarStyle={styles.navbarAuthStyle}
                                navBarButtonColor={colors.whiteBlue}
                                back
                                onBack={() => Actions.pop()}
                            />

                            <Scene
                                key="carForm"
                                component={CarForm}
                                title="Add Car"
                                titleStyle={styles.titleStyle}
                                navigationBarStyle={styles.navbarAuthStyle}
                                navBarButtonColor={colors.whiteBlue}
                                back
                                onBack={() => {
                                    this.props.clearCarForm();
                                    Actions.car();
                                }}
                            />
                        </Drawer>
                    </Scene>
                </Stack>
            </Router>
        );
    }
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
};

export default connect(null, { clearCarForm })(RouterComponent);
