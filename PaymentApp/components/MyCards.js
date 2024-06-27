import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const   MyCards = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>No cards </Text>
      </View>
      </SafeAreaView>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyItems: 'center',
    padding:10,
    alignItems: 'center',
  }
});

export default MyCards;