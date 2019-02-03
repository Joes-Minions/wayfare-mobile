import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
    Card,
    HeaderWithMenu
} from './common';
import FindRide from './FindRide';

/**
 *  Dashboard
 */
function RenderByTab(props){
    switch(props.tabIndex){
        case 0:
            return  <FindRide/>
        default:
            return null
    }
}

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            tabIndex: 0
        }
        this.renderShareFlow = this.renderShareFlow.bind(this)
        this.renderFindFlow = this.renderFindFlow.bind(this)
        this.renderCurrentRides = this.renderCurrentRides.bind(this)
    }
    
    renderFindFlow(event){
        if (this.state.tabIndex != 0) {
            this.setState(()=>({
                tabIndex: 0
            }));
        }
    }
    renderShareFlow(event){
        if (this.state.tabIndex != 1) {
            this.setState(()=>({
                tabIndex: 1
            }));
        }
    }
    renderCurrentRides(event){
        if (this.state.tabIndex != 2) {
            this.setState(()=>({
                tabIndex: 2
            }));
        }
    }
    render() {
        console.log("Dashboard User: " + this.props.user);
        return (
            <View style={styles.dashboardStyle}>
                <HeaderWithMenu title="Dashboard" />
                <CardSection style={styles.tabSectionStyle}>
                    <Tabs 
                        label='Share' 
                        onPress={this.renderShareFlow}
                    />
                    <Tabs 
                        label='Find'
                        onPress={renderFindFlow}
                    />
                    <Tabs 
                        label='Rides'
                        onPress={renderCurrentRides}
                    />
                </CardSection>
            </View>
           
        );
    }
}

const styles = {
    dashboardStyle:{
        flex:1
    },
    tabSectionStyle:{
        flexDirection: 'row',
        flex:.20,
        padding:0,
    },
    button:{
        backgroundColor: '#1D394B'
    },
    buttonPress:{
        backgroundColor: '#2F5167',
        borderBottomColor: '#2F5167'
    }
  }


const mapStateToProps = (state) => {
    const { user } = state.session;
    return { user };
};

export default connect(mapStateToProps)(Dashboard);
