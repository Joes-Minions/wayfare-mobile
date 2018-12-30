import React from 'react'
import { Text } from 'react-native'
import { 
    Card,
    Input,
    CardSection,
    Button
} from '../common'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { accountCreateUpdate } from '../../actionCreators'

/**
 *  Landing password signup
 */
class PasswordForm extends React.Component {
    render(){
        return(
            <Card  style={styles.containerStyle}>
                <CardSection style={styles.formStyle}>
                    <Input
                        label='Password'
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={value => this.props.accountCreateUpdate({prop:'password',value})}
                    />
                    <Input
                        label='Confirm'
                        secureTextEntry
                        value={this.props.confirmPassword}
                        onChangeText={value=> this.props.accountCreateUpdate({prop:'confirmPassword',value})}
                    />
                    <Text style={styles.usageStyle}>
                        Your Password must be X y z
                    </Text>
                </CardSection>
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
    formStyle:{
        flexDirection: 'column',
        justifyContent:'flex-start',  
    },
    usageStyle: {
        fontSize: 20,
        alignSelf: 'center',
    },
  }

  const mapStateToProps = (state) => {
    const { password, confirmPassword } = state.createUserForm

    return { password, confirmPassword  }
}
export default connect(mapStateToProps,{accountCreateUpdate})(PasswordForm)
