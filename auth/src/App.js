import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyD-OmIGZPhhJVXEgH7u1H0wXk2Pe14Uaw4",
            authDomain: "udemy-auth-9eff3.firebaseapp.com",
            databaseURL: "https://udemy-auth-9eff3.firebaseio.com",
            projectId: "udemy-auth-9eff3",
            storageBucket: "udemy-auth-9eff3.appspot.com",
            messagingSenderId: "860796588079"
        });
    }

    render(){
        return(
          <View>
              <Header headerText="Auth" />
              <LoginForm />
          </View>
        );
    };
};

export default App;