import React from 'react'
import { Text } from 'react-native'
import { 
    Card,
    Input,
    CardSection,
    Button
} from '../common'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { accountCreateUpdate } from '../../actionCreators'


/**
 *  Landing email signup
 */
class EmailForm extends React.Component {
    render(){
        return(
            <Card  style={styles.containerStyle}>
                <CardSection style={styles.formStyle}>
                    <Input
                        label='Email'
                        placeholder='Yourname@gmail.com'
                        value={this.props.email}
                        onChangeText={value=> this.props.accountCreateUpdate({prop:'email',value})}
                    />
                    <Text 
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        Expect a verfication email
                    </Text>
                </CardSection>
            </Card>
           
        )
    }
}
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',        
    },
    formStyle:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start',  
    }
}
const mapStateToProps = (state) => {
    const { email } = state.createUserForm;

    return { email };
}
  

export default connect(mapStateToProps, {accountCreateUpdate}
)(EmailForm)