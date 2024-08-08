// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigatior } from './src/navigation/StackNavigatior';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatior />
    </NavigationContainer>

  )
}
export default App;