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
                <Scene key='auth' >
                        <Scene
                            key='landing'
                            component={Landing}
                            hideNavBar
                            initial
                        />
                        <Scene 
                            key='landingAuth' 
                            component={LandingAuth}
                            back
                            title="WayFare"
                        />
                        <Scene  
                            key="findRide"
                            component={LandingGetStarted}
                            back
                            title="Find a Ride"
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
    tabBarStyle: {
        flexDirection: 'column',
        justifyContent:'center',        
    }
  }


export default RouterComponent