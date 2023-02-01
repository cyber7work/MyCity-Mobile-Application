import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigator';

/* React functional component */
const App = (): JSX.Element => {
  /* is dark mode */
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <AuthNavigator />
    </SafeAreaView>
  );
};

/* styles */
const styles = StyleSheet.create({
  safeAreaContainer: {flex: 1},
});

export default App;
