import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Content = () => {
  const date: Date = new Date();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>{date.getDate()}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});

export default Content;
