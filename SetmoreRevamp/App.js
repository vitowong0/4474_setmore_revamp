import React from 'react';
import {View, StatusBar} from 'react-native';
import {StatusBarStyle} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-ionicons';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          // tabBarIcon: () => (
          //   <IonIcon name="home-filled" size={28} color="black" />
          // ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
}

export default App;
