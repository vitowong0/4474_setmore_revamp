import React from 'react';
import {View, StatusBar} from 'react-native';
import {StatusBarStyle} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import IonIcon from 'react-native-ionicons';
import {IonIcon} from '@expo/vector-icons';
// import IonIcon from 'react-native-vector-icons/Ionicons';

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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'darkgrey',
        tabBarActiveTintColor: '#5756B3',
      }}>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 3,
            // tabBarIcon: () => (
            //   <IonIcon name="home-outline" size={28} color="black" />
            // ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          // options={{
          //   tabBarIcon: () => (
          //     <IonIcon name="search-outline" size={28} color="black" />
          //   ),
          // }}
        />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Notification" component={NotificationsScreen} />
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
