
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';




const Home = () => {
  const { theme } = useTheme();
  return (
    //
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        
      <View style={styles.headerRow}>
        <Image source={require('../assets/profile.png')}/>
        <View style= {styles.headerText}>
          <Text style={[{
            fontWeight: 350, opacity: 0.5
          }, {color: theme.textColor}]}>
            Welcome back,
          </Text>
          <Text style={[{
            fontWeight: 600,
            fontSize: 18,
          }, {color: theme.textColor}]}>
            Caleb Setordzi
          </Text>
        </View>

        <View style={styles.actionButtonSearch}>
          <Image source={require('../assets/search.png')}/>
        </View>
      </View>

      <View style={{marginTop:10, marginBottom: 10}}>
        <Image source={require('../assets/Card.png')}/>
      </View>

      <View style={styles.actionIcons}>
          <View>
            <View style={styles.actionButtons}>
              <Image source={require('../assets/send.png')}/>
            </View>
            <Text style={{color: theme.textColor}}>   Send</Text>
          </View>
          
          <View>
            <View style={styles.actionButtons}>
              <Image source={require('../assets/recieve.png')}/>
            </View>
            <Text style={{color: theme.textColor}}>Receive</Text>
          </View>

          <View>
            <View style={styles.actionButtons}>
              <Image source={require('../assets/loan.png')}/>
            </View>
            <Text style={{color: theme.textColor}}>   Loan</Text>
          </View>

          <View>
            <View style={styles.actionButtons}>
              <Image source={require('../assets/topUp.png')}/>
            </View>
            <Text style={{color: theme.textColor}}> Topup</Text>
          </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
          <Text style={[{fontWeight: 600, fontSize: 20, paddingTop: 20, paddingBottom: 10}, {color: theme.textColor}]}>
            Transaction
          </Text>
          <Text style={[{fontWeight: 500, fontSize: 15, color: '#0096FF', paddingTop: 20, paddingBottom: 10}, {color: theme.textColor}]}>
            Sell All
          </Text>
      </View>

      <View style={styles.headerRow}>
        <View style={[styles.actionButtons,{ height: 50, width: 50, borderRadius: 25,}]}>
          <Image source={require('../assets/apple.png')}/>
        </View>
        <View style= {styles.headerText}>
          <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>Apple Store</Text>
          <Text style={[{fontWeight: 300, opacity: 0.5 }, {color: theme.textColor}]}>Entertainment</Text>
        </View>
        <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>- $5,99</Text>
      </View>

      <View style={styles.headerRow}>
        <View style={[styles.actionButtons, { height: 50, width: 50, borderRadius: 25,}]}>
          <Image source={require('../assets/spotify.png')}/>
        </View>
        <View style= {styles.headerText}>
          <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>Spotify</Text>
          <Text style={[{fontWeight: 300, opacity: 0.5 }, {color: theme.textColor}]}>Music</Text>
        </View>
        <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>- $12,99</Text>
      </View>

      <View style={styles.headerRow}>
        <View style={[styles.actionButtons, { height: 50, width: 50, borderRadius: 25,}]}>
          <Image source={require('../assets/moneyTransfer.png')}/>
        </View>
        <View style= {styles.headerText}>
          <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>Money Transfer</Text>
          <Text style={{fontWeight: 300, opacity: 0.5 }}>Transaction</Text>
        </View>
        <Text style={[{fontWeight: 500, fontSize: 20, color: '#0096FF'}, {color: theme.textColor}]}>
          - $300
        </Text>
      </View>

      <View style={styles.headerRow}>
        <View style={[styles.actionButtons, { height: 50, width: 50, borderRadius: 25,}]}>
          <Image source={require('../assets/grocery.png')}/>
        </View>
        <View style= {styles.headerText}>
          <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>Grocery</Text>
          <Text style={[{fontWeight: 300, opacity: 0.5 }, {color: theme.textColor}]}>Food</Text>
        </View>
        <Text style={[{fontWeight: 500, fontSize: 17,}, {color: theme.textColor}]}>- $88</Text>
      </View>

      

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyItems: 'center',
    padding:10,

  },
  text: {
    color: '#000',
  },
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  headerText: {
    flex: 1,
    flexDirection: 'column',
    padding: 8,
  },
  actionIcons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  actionButtons:{
    backgroundColor: 'rgba(229, 228, 226, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    padding: 5,
    
  },
  actionButtonSearch:{
    backgroundColor: 'rgba(229, 228, 226, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 5,
  },
});

export default Home;