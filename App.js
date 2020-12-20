import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, MyCustomNavigator } from "./src/navigations/MyCustomNavigator";
import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Context as AuthContext } from './src/contexts/AuthContext';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/contexts/LocationContext';



const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {state.isLoading
          ?
          <ResolveAuthScreen />
          :
          state.token
            ?
            <MyCustomNavigator />
            :
            <AuthNavigator />
        }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocationProvider>
  )
}

