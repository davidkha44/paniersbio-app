import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppNavigation from './components/AppNavigation';

export default function App() {
  return (
    <PaperProvider settings={{ icon: (props) => <Ionicons {...props} /> }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
