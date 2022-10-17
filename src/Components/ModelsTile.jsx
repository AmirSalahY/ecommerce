import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageContainerShadow from './ImageContainerShadow';
import images from '../assets/images';

const ModelsTile = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Product', {model: item})}>
      <View style={styles.tileContainer}>
        <ImageContainerShadow image={images[item.modelImage]} />
        <Text style={styles.title}>{item.modelCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ModelsTile;

const styles = StyleSheet.create({
  tileContainer: {
    marginTop: 21,
    width: '44%',
    maxHeight: 114,
    marginHorizontal: '3%',
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 4,
    color: '#4E4E4E',
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
    fontWeight: 'bold',
  },
});
