import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Home from './components/Homepage';
import MyCards from './components/MyCards';
import Settings from './components/Settingscreen';
import Statistics from './components/Statistics';
import ThemeWrapper from './components/ThemeWrapper';
import ThemeProvider from './contexts/ThemeProvider';

const Tab = createBottomTabNavigator();
// const Theme = {
//   ...DefaultTheme, colors: {
//     ...DefaultTheme.colors,
//     primary: 'rbg(255, 45, 85)',
//   }
// }


export default function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <NavigationContainer > 
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen  name="My Cards" component={MyCards} />
            <Tab.Screen name="Statistics" component={Statistics} />
            <Tab.Screen  name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
