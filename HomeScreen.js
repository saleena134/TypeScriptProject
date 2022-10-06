import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topContainer}>
        <Text style={{padding: 20, margin: 20}}>HomeScreen</Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          showSoftInputOnFocus={true}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <View style={styles.circle3} />
        <View style={styles.circle} />
        <View style={styles.circle2} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#1e472f',
    width: 20,
    height: 50,
    borderBottomLeftRadius: 25,
    // borderRadius: 25,
  },
  circle2: {
    backgroundColor: '#1e472f',
    width: 200,
    height: 160,
    borderBottomLeftRadius: 150,
  },
  circle3: {
    backgroundColor: '#1e472f',
    width: 20,
    height: 30,
    borderBottomLeftRadius: 25,
  },
  topContainer: {
    marginTop: 50,
    // backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
});
