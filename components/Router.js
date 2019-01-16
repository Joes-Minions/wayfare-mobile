import React from 'react'
import { Scene, Router, Tabs, Stack} from 'react-native-router-flux'
import Dashboard from './Dashboard'
import Icon from 'react-native-vector-icons/FontAwesome'
import LandingAuth from './landing/LandingAuth'
import Landing from './landing/Landing'
import LandingGetStarted from './landing/LandingGetStarted'


/**
 * Component for managing Routing/navigation within this App.
 * Passed to index.js instead of App
 */


const RouterComponent = () => {
 
    return (
        <Router>
            <Stack key = 'root' hideNavBar>
                <Scene key='auth'>
                        <Scene
                            key='landing'
                            component={Landing}
                            title="Welcome!"
                            titleStyle={styles.landingTitleStyle}
                            navigationBarStyle={styles.authStyle}
                            initial
                        />
                        <Scene 
                            key='landingAuth' 
                            component={LandingAuth}
                            back
                            title="WayFare"
                            navigationBarStyle={styles.authStyle}
                            navBarButtonColor='#E4EDF2'
                        />
                        <Scene  
                            key="findRide"
                            component={LandingGetStarted}
                            back
                            title="Select an Option"
                        />
                </Scene>
                <Scene key='main'>
                    <Scene
                        key='dashboard'
                        component={Dashboard}
                        title='WayFare'
                    />
                </Scene>
            </Stack>
        </Router>
    )
}
const styles = {
    landingTitleStyle:{
        color:'#E4EDF2'
    },
    authStyle: {
        backgroundColor: '#1D394B'
    }

  }


export default RouterComponent