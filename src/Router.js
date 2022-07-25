import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Details from './pages/Details/Details';
import Jobs from './pages/Jobs/Jobs'
import Favorites from './pages/Favorites/Favorites';
//import Provider from './context/FavoriteProvider';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Jobs'
             component={Jobs} />
            <Drawer.Screen name='Favorites' component={Favorites} />
        </Drawer.Navigator>
    )
}


const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false,}}>
                <Stack.Screen name='Home' component={Root}
                    options={{
                     //  headerShown:false,
                       // title: 'Jobs',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: '#ef5350' },
                    }} />
                <Stack.Screen name='Details' component={Details}
                    options={{
                        title: 'Detail',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: '#ef5350' },
                    }} />

            </Stack.Navigator>

        </NavigationContainer>


    )
}

export default Router;