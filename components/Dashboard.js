import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
    Card,
    HeaderWithMenu
} from './common';

/**
 *  Dashboard
 */
class Dashboard extends Component {
    render() {
        console.log("Dashboard User: " + this.props.user);
        return (
            <HeaderWithMenu title="Dashboard" />
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state.session;
    return { user };
};

export default connect(mapStateToProps)(Dashboard);
