/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Image, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import homeIcon from './assets/icons/home_grey.png';
import searchIcon from './assets/icons/search_grey.png';
import favouritesIcon from './assets/icons/favourites_grey.png';
import calendarIcon from './assets/icons/calendar_grey.png';
import notificationsIcon from './assets/icons/notifications_grey.png';

import homeIconGreen from './assets/icons/home_green.png';
import searchIconGreen from './assets/icons/search_green.png';
import favouritesIconGreen from './assets/icons/favourites_green.png';
import calendarIconGreen from './assets/icons/calendar_green.png';
import notificationsIconGreen from './assets/icons/notifications_green.png';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import BookingOverviewScreen from './screens/BookingOverviewScreen';

import {Colours} from './constants/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CalendarStack() {
  return (
    // Create a stack navigator with the header hidden
    <Stack.Navigator>
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingOverview"
        component={BookingOverviewScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

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
                <Image source={homeIconGreen} style={{width: 27, height: 27}} />
              ) : (
                <Image source={homeIcon} style={{width: 27, height: 27}} />
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
                  style={{width: 24, height: 27}}
                />
              ) : (
                <Image source={searchIcon} style={{width: 24, height: 27}} />
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
                  style={{width: 27, height: 25}}
                />
              ) : (
                <Image
                  source={favouritesIcon}
                  style={{width: 27, height: 25}}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarStack}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={calendarIconGreen}
                  style={{width: 27, height: 27}}
                />
              ) : (
                <Image source={calendarIcon} style={{width: 27, height: 27}} />
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
                  style={{width: 27, height: 27}}
                />
              ) : (
                <Image
                  source={notificationsIcon}
                  style={{width: 27, height: 27}}
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
