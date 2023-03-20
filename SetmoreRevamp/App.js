/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Image, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import IonIcon from 'react-native-ionicons';
// import IonIcon from 'react-native-vector-icons/Ionicons';
import IonIcon from '@expo/vector-icons/Ionicons';

import homeIcon from './assets/setmore_icons/home_grey.png';
import searchIcon from './assets/setmore_icons/search_grey.png';
import favouritesIcon from './assets/setmore_icons/favourites_grey.png';
import calendarIcon from './assets/setmore_icons/calendar_grey.png';
import notificationsIcon from './assets/setmore_icons/notifications_grey.png';

import homeIconGreen from './assets/setmore_icons/home_green.png';
import searchIconGreen from './assets/setmore_icons/search_green.png';
import favouritesIconGreen from './assets/setmore_icons/favourites_green.png';
import calendarIconGreen from './assets/setmore_icons/calendar_green.png';
import notificationsIconGreen from './assets/setmore_icons/notifications_green.png';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';

import {Colours} from './constants/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colours.westerngrey,
        tabBarActiveTintColor: Colours.darkturqouise,
      }}>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={homeIconGreen} style={{width: 22, height: 22}} />
              ) : (
                <Image source={homeIcon} style={{width: 22, height: 22}} />
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={searchIconGreen}
                  style={{width: 22, height: 25}}
                />
              ) : (
                <Image source={searchIcon} style={{width: 22, height: 25}} />
              ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={favouritesIconGreen}
                  style={{width: 25, height: 20}}
                />
              ) : (
                <Image
                  source={favouritesIcon}
                  style={{width: 25, height: 20}}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={calendarIconGreen}
                  style={{width: 22, height: 22}}
                />
              ) : (
                <Image source={calendarIcon} style={{width: 22, height: 22}} />
              ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={notificationsIconGreen}
                  style={{width: 22, height: 22}}
                />
              ) : (
                <Image
                  source={notificationsIcon}
                  style={{width: 22, height: 22}}
                />
              ),
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
