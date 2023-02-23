import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
// import AppNavigator from './src/navigators/AppNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';

/* React functional component */
const App = (): JSX.Element => {
  /* is dark mode */
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </>
  );
};

export default App;
