/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {StatusBarStyle} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import IonIcon from 'react-native-ionicons';
// import IonIcon from 'react-native-vector-icons/Ionicons';
import IonIcon from '@expo/vector-icons/Ionicons';

import homeIcon from './assets/images/boywhatthehell.png';
import searchIcon from './assets/images/briar.png';
import favouritesIcon from './assets/images/liv.png';
import calendarIcon from './assets/images/pink_logo.png';
import notificationIcon from './assets/images/bell.png';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';

import {Colors} from './constants/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.westerngrey,
        tabBarActiveTintColor: Colors.westernpurple,
      }}>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={homeIcon}
                  resizeMode="contain"
                  style={{width: 25}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={searchIcon}
                  resizeMode="contain"
                  style={{width: 25}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={favouritesIcon}
                  resizeMode="contain"
                  style={{width: 25}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={calendarIcon}
                  resizeMode="contain"
                  style={{width: 25}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={notificationIcon}
                  resizeMode="contain"
                  style={{width: 30}}
                />
              );
            },
            tabBarBadge: 69,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
