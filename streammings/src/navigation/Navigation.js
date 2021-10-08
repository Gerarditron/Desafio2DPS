import React from 'react';
import {View, Text} from 'react-native';s
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Peliculas from '../screens/Peliculas';
import Series from '../screens/Series';
import Proximamente from '../screens/Proximamente';


const Tab = createBottomTabNavigator();

export default function Navigation(){
    

    
    return(
        <>
        <Tab.Navigator>
            <Tab.Screen
                name="Peliculas"
                component={Peliculas}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:'blue',
                    tabBarInactiveTintColor:'darkblue',
                }}
            />
            <Tab.Screen
                name="Series"
                component={Series}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:'orange',
                    tabBarInactiveTintColor:'darkred'
                }}
            />
            <Tab.Screen 
                name="Proximamente"
                component={Proximamente}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:'red',
                    tabBarInactiveTintColor:'darkred'
                }}
            />
        </Tab.Navigator>
        </>
    );
}