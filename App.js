import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, MyCustomNavigator } from "./src/navigations/MyCustomNavigator";
import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Context as AuthContext } from './src/contexts/AuthContext';

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!state.token && <AuthNavigator />}
      {state.token && <MyCustomNavigator />}
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

