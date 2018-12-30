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
import NameForm from './NameForm'
import EmailForm from './EmailForm'
import PasswordForm from './PasswordForm'
import SignUpConfirmation from './SignUpConfirmation'
import { accountCreate, accountCreateNext, accountCreateUpdate } from '../../actionCreators';

/**
 *  Sign Up flow
 */

function RenderByIndex(props){
    switch(props.index){
        case 0:
            return <NameForm/>
        case 1:
            return <EmailForm/>
        case 2:
            return <PasswordForm/>
        case 3:
            return <SignUpConfirmation/>
        default:
            return <NameForm/>
    }
}
function validateName(firstName, lastName){
    const errors =[]
    if (firstName.length === 0){
        errors.push('First Name Cant Be empty')
    }
    if (lastName.length === 0){
        errors.push('Last Name Cant Be empty')
    }
    return errors
}
function validatePassword(password, confirmPassword){
    const errors =[]
    if (password.length === 0){
        errors.push('password needs to be longer than 0')
    }
    if (password != confirmPassword){
        errors.push('passwords dont match')
    }
    return errors
}
function validateEmail(email){
    const errors =[]
    if (!email.includes('@')){
        errors.push('email needs an @')
    }
    if (!email.includes('.')){
        errors.push('email needs a .')
    }
    if (email.length < 5) {
        errors.push('Email should be at least 5 charcters long')
    }
    return errors
}

class LandingSignUp extends React.Component {
    constructor(props){
        super()
        this.state = {
            index: 0,
            errors: []
        }
        this.renderButtons = this.renderButtons.bind(this)
        this.decrementIndex = this.decrementIndex.bind(this)
        this.incrementIndex = this.incrementIndex.bind(this)
    }

    onButtonPress(event, state){
        const { firstName, lastName, email, password } = this.props
        this.props.accountCreate({firstName, lastName, email, password})
    }

    incrementIndex(event,state){
        const { firstName, lastName, email, password, confirmPassword } = this.props
        const { index } = this.state
        if (index == 0){
            const errors = validateName(firstName, lastName)
            if (errors.length>0){
                this.setState({ errors })
            }
            else{
                this.setState((state)=>({
                    index: state.index + 1,
                    errors: []
                }))
            }
        }
        else if (index == 1){
            const errors = validateEmail(email)
            if (errors.length>0){
                this.setState({ errors })
            }
            else{
                this.setState((state)=>({
                    index: state.index + 1,
                    errors: []
                }))
            }
        }
        else if (index == 2){
            const errors = validatePassword(password,confirmPassword)
            if (errors.length>0){
                this.setState({ errors })
            }
            else{
                this.setState((state)=>({
                    index: state.index + 1,
                    errors: []
                }))
            }
        }
    }
    

    decrementIndex(event,state){
        this.setState((state)=>({
            index: state.index - 1
        }))
    }

    renderButtons(event, state){
        if (this.props.loading){
            return <Spinner/>
        }
        if (this.state.index==0){
            return (
                <CardSection>
                    <Button
                        label='Next'
                        onPress={this.incrementIndex.bind(this)}
                    />
                </CardSection>
                
            )
        }
        else if(this.state.index==3) {
            return (
                <CardSection>
                    <Button
                        label='Create!'
                        onPress={this.onButtonPress.bind(this)}
                    />
                    <Button
                        label='Back'
                        onPress={this.decrementIndex.bind(this)}
                    />
                </CardSection>
            )
        }
        else{
            return (
                <CardSection>
                    <Button
                        label='Next'
                        onPress={this.incrementIndex.bind(this)}
                    />
                    <Button
                        label='Back'
                        
                        onPress={this.decrementIndex.bind(this)}
                    />
                </CardSection>
                
            )
        }
    }

    render(){
        const { errors } = this.state

        return(
            <Card  style={styles.containerStyle}>
                <CardSection style={styles.formStyle}>
                    <RenderByIndex
                        index={this.state.index}
                    />
                </CardSection>
                        {errors.map(error=> (
                            <Text key={error}> Error: {error}</Text>
                        ))}

                {this.renderButtons()}
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
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    formStyle:{
        flex:.25,
        flexDirection: 'column',
        justifyContent:'flex-start',  
    },
    buttonStyle:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start',  
    }
}
const mapStateToProps =(state) =>{
    const { 
        firstName, 
        lastName, 
        email,
        password,
        error,
        confirmPassword
    } = state.createUserForm
    return { 
        firstName, 
        lastName, 
        email,
        password,
        error,
        confirmPassword
    }
}
export default connect(mapStateToProps, {
    accountCreate, accountCreateUpdate, accountCreateNext
})(LandingSignUp)