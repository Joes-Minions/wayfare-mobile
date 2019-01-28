import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { 
    Card
} from './common';

/**
 *  Dashboard
 */
class Dashboard extends Component {
    render() {
        console.log("Dashboard User: " + this.props.user);
        return (
            <Card>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state.session;
    return { user };
};

export default connect(mapStateToProps)(Dashboard);
