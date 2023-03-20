/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Image, StatusBar} from 'react-native';

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

import newHomeIcon from './assets//images/setmore_icons/home.png';
import newSearchIcon from './assets//images/setmore_icons/search.png';
import newFavouritesIcon from './assets//images/setmore_icons/favourites.png';
import newCalendarIcon from './assets//images/setmore_icons/calendar.png';
import newNotificationIcon from './assets//images/setmore_icons/notification.png';

import newHomeIconGreen from './assets//images/setmore_icons/home_green.png';
import newSearchIconGreen from './assets//images/setmore_icons/search_green.png';
import newFavouritesIconGreen from './assets//images/setmore_icons/favourites_green.png';
import newCalendarIconGreen from './assets//images/setmore_icons/calendar_green.png';
import newNotificationsIconGreen from './assets//images/setmore_icons/notification_green.png';

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
            // tabBarIcon: () => {
            //   return (
            //     <Image
            //       source={newHomeIcon}
            //       resizeMode="contain"
            //       style={{width: 25}}
            //     />
            //   );
            // },

            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={newHomeIconGreen}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image source={newHomeIcon} style={{width: 20, height: 20}} />
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            // tabBarIcon: () => {
            //   return (
            //     <Image
            //       source={newSearchIcon}
            //       resizeMode="contain"
            //       style={{width: 25}}
            //     />
            //   );
            // },

            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={newSearchIconGreen}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image source={newSearchIcon} style={{width: 20, height: 20}} />
              ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            // tabBarIcon: () => {
            //   return (
            //     <Image
            //       source={newFavouritesIcon}
            //       resizeMode="contain"
            //       style={{width: 25}}
            //     />
            //   );
            // },

            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={newFavouritesIconGreen}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={newFavouritesIcon}
                  style={{width: 20, height: 20}}
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
                  source={newCalendarIconGreen}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={newCalendarIcon}
                  style={{width: 20, height: 20}}
                />
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
                  source={newNotificationsIconGreen}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={newNotificationIcon}
                  style={{width: 20, height: 20}}
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
