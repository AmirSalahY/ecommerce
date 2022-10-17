import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';

const ImageContainerShadow = ({image, style, imageStyle}) => {
  return (
    <ShadowView style={[styles.imageContainer, style]}>
      <Image source={image} styles={[{alignSelf: 'center'}, imageStyle]} />
    </ShadowView>
  );
};

export default ImageContainerShadow;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
