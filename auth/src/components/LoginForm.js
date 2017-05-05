import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((response) => this.onServerError(response));
            });
    }

    onLoginSuccess(){
        this.setState({
            error: '',
            loading: false,
            email: '',
            password: '' }
        );
    }

    onServerError(response){
        const error = 'Authentication failed: ' + response.message;
        this.setState({ error: error, loading: false })
    }

    renderButton(){
        if(this.state.loading)
           return (
               <Spinner size="small" />
           );
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email"
                           onChangeText={email => this.setState({email})}
                           value={this.state.email}
                           placeholder="Enter your email"/>
                </CardSection>

                <CardSection>
                    <Input label="Password"
                           onChangeText={password => this.setState({password})}
                           value={this.state.password}
                           placeholder="Enter your password"
                           isPassword={true}
                    />
                </CardSection>
                    <Text style={ styles.errorTextStyle }>
                        { this.state.error }
                    </Text>
                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    };
}

const styles = {
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red',
        textAlign: 'justify',
        margin: 8
    }
}

export default LoginForm;