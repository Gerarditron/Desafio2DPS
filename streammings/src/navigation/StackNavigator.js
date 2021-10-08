import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import Navigation from './Navigation'
import Youtube from '../screens/Youtube';

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Navigator" component={Navigation} />
            <Stack.Screen name="Youtube" component={Youtube} />
        </Stack.Navigator>
    );
}