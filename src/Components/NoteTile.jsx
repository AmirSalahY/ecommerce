import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NoteTile = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'OpenSans-Regular',
          fontWeight: '400',
          fontSize: 12,
          color: '#4E4E4E',
        }}>
        Jennifer Smith
      </Text>
      <Text
        style={{
          fontFamily: 'OpenSans-Italic',
          fontSize: 8,
          color: '#4E4E4E',
        }}>
        03.02.2021-15:00PM
      </Text>
      <Text
        style={{
          fontFamily: 'OpenSans-Regular',
          fontSize: 12,
          fontColor: '#4E4E4E',
        }}>
        This Item need to be checked
      </Text>
    </View>
  );
};

export default NoteTile;

const styles = StyleSheet.create({});
