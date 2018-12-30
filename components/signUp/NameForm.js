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

class NameForm extends React.Component {
    render(){
        return(
            <Card  style={styles.containerStyle}>
                <CardSection style={styles.formStyle}>
                    <Input
                        label='First Name'
                        value={this.props.firstName}
                        onChangeText={value=> this.props.accountCreateUpdate({prop:'firstName',value})}
                    
                    />
                    <Input
                        label='Last Name'
                        value={this.props.lastName}
                        onChangeText={value=> this.props.accountCreateUpdate({prop:'lastName',value})}
                    
                    />
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
    }
  }
const mapStateToProps = (state) => {
    const { firstName, lastName } = state.createUserForm

    return { firstName, lastName }
}
  

export default connect(mapStateToProps,{accountCreateUpdate})(NameForm)