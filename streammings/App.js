import * as React from 'react';
import {View, Text, SafeAraView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/Navigation';
import StackNavigator from './src/navigation/StackNavigator';

export default function App(){
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );

}