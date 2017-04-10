import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './app/Components/Header';
import AlbumList from './app/Components/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('HelloWorld', () => App);
