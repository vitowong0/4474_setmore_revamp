/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image} from 'react-native';

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

// import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import CalendarScreen from './screens/CalendarScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SettingsScreen from './screens/SettingsScreen';

import BookingScreen from './screens/BookingScreen';
import CompanyDetailsScreen from './screens/CompanyDetailsScreen';

import {Colours} from './constants/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
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
          component={HomeStack}
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
          component={SearchStack}
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
          component={FavouritesStack}
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
          component={CalendarScreen}
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
            tabBarBadge: 5,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Home2" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="CompanyDetailsScreen"
          component={CompanyDetailsScreen}
        />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function FavouritesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
        <Stack.Screen
          name="CompanyDetailsScreen"
          component={CompanyDetailsScreen}
        />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}

export default App;
