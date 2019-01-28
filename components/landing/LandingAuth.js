import React from 'react';
import { Text,View } from 'react-native';
import { 
    Card,
    Input,
    CardSection,
    Button,
    Tabs
} from '../common';
import LandingLogIn from './LandingLogIn';
import LandingSignUp from '../signUp/LandingSignUp';

/**
 *  Landing Auth Page
 */
function RenderByTab(props){
    console.log("Displaying " + (props.tab ? "SignIn" : "SignUp") + " Tab");
    // props.tab indicates to display SignIn (true) or SignUp (false) Component
    switch (props.tab) {
        case false:
            return <LandingSignUp/>;
        default:
            return <LandingLogIn/>;
    }
}

class LandingAuth extends React.Component {
    constructor(props){
        super();
        this.state = {
            tab: true
        }
        this.renderSignUp = this.renderSignUp.bind(this);
        this.renderLogIn = this.renderLogIn.bind(this);
    }

    renderLogIn(event){
        console.log('renderlogIn clicked');
        if (this.state.tab == false) {
            console.log('is false ')
            this.setState(()=>({
                tab: true
            }));
        }
    }
    renderSignUp(event){
        console.log('render signup  clicked ')
        if (this.state.tab == true){
            console.log('is true ')
            this.setState(()=>({
                tab: false
            }))
        }
    }

    
    render(){
        return (
            <Card style={styles.containerStyle}>
                <CardSection style={styles.tabSectionStyle}>
                    <Tabs 
                        label='Sign In' 
                        style={this.state.tab
                            ? styles.buttonPress
                            : styles.button} 
                        onPress={this.renderLogIn} 
                        />
                    <Tabs 
                        label='Sign Up'
                        style={!this.state.tab
                            ? styles.buttonPress
                            : styles.button} 
                        onPress={this.renderSignUp}
                    />
                </CardSection>
                <RenderByTab tab={this.state.tab}/>
            </Card>
        )
    }
}
const styles = {
    containerStyle: {
        flex: 2,
        flexDirection: 'column',
        justifyContent:'flex-start',        
    },
    tabSectionStyle:{
        flexDirection: 'row',
        flex:.20,
        padding:0
    },
    button:{
        backgroundColor: '#1D394B'
    },
    buttonPress:{
        backgroundColor: '#2F5167',
        borderBottomColor: '#2F5167'
    }
  }

export default LandingAuth;
