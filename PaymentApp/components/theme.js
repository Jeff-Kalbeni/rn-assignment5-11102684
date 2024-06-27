import { DarkTheme, DefaultTheme, NavigationContainer, } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

export default () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* content */}
    </NavigationContainer>
  );
};