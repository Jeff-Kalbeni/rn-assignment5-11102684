import * as React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

const Settings = () =>{
  const { theme, updateTheme} = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode); 
  return (
    <SafeAreaView style = {[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.header}>
        <Text style={[styles.settings, {color: theme.textColor}]}>
          Settings
        </Text>
      </View>

      <View style={styles.screen}>
        <View style={styles.headerText}>
            <Text style={[styles.screenText, {color: theme.textColor}]}>Language</Text>
            <Image style={{width: 20, height: 20}}
            source={require('../assets/arrow.png')}/>
        </View>

        <View style={{
          height: 2,
          borderRadius: 1,
          backgroundColor: 'rgba(229, 228, 226, 0.6)',
          marginBottom: 20,
        }}></View>

        <View style={styles.headerText}>
          <Text style={[styles.screenText, {color: theme.textColor}]}>My Profile</Text>
          <Image style={{width: 20, height: 20}}
          source={require('../assets/arrow.png')}/>
        </View>
        <View style={{
          height: 2,
          borderRadius: 1,
          backgroundColor: 'rgba(229, 228, 226, 0.6)',
          marginBottom: 20,
        }}></View>

        <View style={styles.headerText}>
          <Text style={[styles.screenText, {color: theme.textColor}]}>Contact US</Text>
          <Image style={{width: 20, height: 20}}
          source={require('../assets/arrow.png')}/>
        </View>
        <View style={{
          height: 2,
          borderRadius: 1,
          backgroundColor: 'rgba(229, 228, 226, 0.6)',
          marginBottom: 20,
        }}></View>

        <View style={styles.headerText}>
          <Text style={[styles.screenText, {color: theme.textColor}]}>Change Password</Text>
          <Image style={{width: 20, height: 20}}
          source={require('../assets/arrow.png')}/>
        </View>
        <View style={{
          height: 2,
          borderRadius: 1,
          backgroundColor: 'rgba(229, 228, 226, 0.6)',
          marginBottom: 20,
        }}></View>

        <View style={styles.headerText}>
          <Text style={[styles.screenText, {color: theme.textColor}]}>Privacy Policy</Text>
          <Image style={[{width: 20, height: 20}, {color: theme.textColor}]}
          source={require('../assets/arrow.png')}/>
        </View>
      </View>
      <View style={[{
          height: 2,
          borderRadius: 1,
          backgroundColor: 'rgba(229, 228, 226, 0.6)',
          marginBottom: 20, 
        },{color: theme.textColor}]}></View>

      <View style={styles.theme}>
          <Text style={[styles.themeText, {color: theme.textColor}]}>Theme</Text>
          <View style={{height: 30, width: 40, borderRadius: 10, backgroundColor: 'gray'}}>
          <Button  title=''onPress={changeTheme}/>
          </View>
      </View>
      
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    // alignItems: 'center',
  },
  header: {
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 0,
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  theme: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  themeText: {
    fontSize: 20,
    fontWeight: '500'
  },
  settings: {
    color: '#000',
    fontSize: 25,
    
  },
  screen: {
    paddingTop: 70,
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
  },
  screenText: {
    fontSize: 18,
  },
})

export default Settings;