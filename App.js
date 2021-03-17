import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Dagens Dato</Text>
        </View>
        <Text>e</Text>
      </View>
    </>
  );
};

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

export default App;
