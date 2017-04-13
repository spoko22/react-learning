import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

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
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    };
}

export default LoginForm;