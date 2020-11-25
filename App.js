import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthNavigator, MyCustomNavigator, trackDetails } from "./src/navigations/MyCustomNavigator";
import { Provider as AuthProvider } from './src/contexts/AuthContext'



const auth = false;

const App = () => {
  return (<NavigationContainer>
    {!auth && <AuthNavigator />}
    {auth && <MyCustomNavigator />}
  </NavigationContainer>
  )
}
// export default App;

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

