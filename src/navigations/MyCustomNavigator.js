import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';

const loginFlow = createStackNavigator();
const trackListFlow = createStackNavigator();
const mainFlow = createBottomTabNavigator();
const initialFlow = createStackNavigator();


export function AuthNavigator() {
  return <loginFlow.Navigator>
    <loginFlow.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <loginFlow.Screen 
    name="Signin" 
    component={SigninScreen}
    options={{ headerShown: false }}
     />
  </loginFlow.Navigator>
}

export function trackDetails() {
  return <trackListFlow.Navigator>
    <trackListFlow.Screen name="TrackList" component={TrackListScreen} />
    <trackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
  </trackListFlow.Navigator>
}

export function MyCustomNavigator() {
  return <mainFlow.Navigator>
    <mainFlow.Screen name="TrackList" component={trackDetails} />
    <mainFlow.Screen name="Account" component={AccountScreen} />
    <mainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
  </mainFlow.Navigator>
}