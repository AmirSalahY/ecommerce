import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';

const CustomTextInput = ({children, style}) => {
  console.log(typeof Icon);
  return (
    <ShadowView style={[styles.container, style]}>
      <>
        <TextInput
          placeholder="Type to Search…"
          placeholderTextColor="#B4B4B4"
          style={styles.textInput}
        />
        {children ? <View style={styles.iconContainer}>{children}</View> : null}
      </>
    </ShadowView>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 49,
    width: 355,
    backgroundColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textInput: {
    backgroundColor: '##F0F0F0',
    width: '100%',
    height: '100%',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 50,
    fontFamily: 'OpenSans-Italic',
  },
  iconContainer: {position: 'absolute', right: 19, top: 16.5},
});
