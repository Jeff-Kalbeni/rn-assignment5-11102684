import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const   Statistics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>No Statistics</Text>
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

export default Statistics;