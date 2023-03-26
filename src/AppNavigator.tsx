import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {GalleryScreen} from './screens/GalleryScreen/GalleryScreen';
import {ProfileScreen} from './screens/ProfileScreen/ProfileScreen';
import {Header} from './components/Header/Header';
import {Logo} from './ui/Logo/Logo';

import {colors} from './styles/base';

const Tab = createBottomTabNavigator();

enum TabIcons {
  Home = 'ios-home-outline',
  Gallery = 'ios-images-outline',
  Profile = 'ios-person-outline',
}

type TabIconString = keyof typeof TabIcons;

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          /* eslint-disable react/no-unstable-nested-components*/
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name={TabIcons[route.name as TabIconString]}
              color={color}
              size={size}
            />
          ),
          headerRight: Logo,
          header: Header,
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.gray,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
