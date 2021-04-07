import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Content from './Content';

const App = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Dagens Dato</Text>
        </View>
        <Content />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {},
  headerContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'midnightblue',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
});
