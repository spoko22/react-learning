import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, CardSection } from './components/common';

class App extends Component {
    render(){
        return(
          <View>
              <Header headerText="Auth" />
              <Card>
                  <CardSection>
                      <Text>Text</Text>
                  </CardSection>
                  <CardSection>
                      <Text>Text2</Text>
                  </CardSection>
              </Card>
          </View>
        );
    };
};

export default App;