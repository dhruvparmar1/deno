import React, {useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import APIProvider from 'api/APIProvider';
import {ThemeProvider} from 'ui';
import {RootNavigator} from 'navigation';
import './src/translations/IMLocalize';
import {WithSplashScreen} from 'screens/Splash';
import {useEffect} from 'react';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 100);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <APIProvider>
        <ThemeProvider>
          <RootNavigator />
          <FlashMessage position="top" />
        </ThemeProvider>
      </APIProvider>
    </WithSplashScreen>
  );
};

export default App;
