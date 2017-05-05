import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyD-OmIGZPhhJVXEgH7u1H0wXk2Pe14Uaw4",
            authDomain: "udemy-auth-9eff3.firebaseapp.com",
            databaseURL: "https://udemy-auth-9eff3.firebaseio.com",
            projectId: "udemy-auth-9eff3",
            storageBucket: "udemy-auth-9eff3.appspot.com",
            messagingSenderId: "860796588079"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user)
                this.setState({loggedIn: true});
            else
                this.setState({loggedIn: false
                });
        });
    }

    showScreen(){
        switch (this.state.loggedIn){
            case true:
                return (
                    <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </View>
                );
            case false:
                return(
                    <LoginForm />
                );
            default:
                return(
                    <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render(){
        return(
          <View>
              <Header headerText="Auth" />
              {this.showScreen()}
          </View>
        );
    };
}

export default App;