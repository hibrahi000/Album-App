/**
 * @format
 */

//first thing we need to do is to import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);
//render it to the deveice
AppRegistry.registerComponent(appName, () => App);
