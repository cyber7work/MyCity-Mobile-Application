import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';
// import AuthNavigator from './src/navigators/AuthNavigator';

/* React functional component */
const App = (): JSX.Element => {
  /* is dark mode */
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </>
  );
};

export default App;
