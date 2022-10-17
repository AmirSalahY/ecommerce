import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';

const ImageContainerShadow = ({image, style, imageStyle}) => {
  return (
    <ShadowView style={[styles.imageContainer, style]}>
      <Image style={[imageStyle, styles.imageStyle]} source={image} />
    </ShadowView>
  );
};

export default ImageContainerShadow;

const styles = StyleSheet.create({
  imageStyle: {alignSelf: 'center', width: '80%', height: '80%'},
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
