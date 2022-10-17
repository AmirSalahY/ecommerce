//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgUri, SvgXml} from 'react-native-svg';
import BackArrow from '../assets/icons/BackArrow';

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Page')}>
        <Text>PageScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default HomeScreen;
