import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({children, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    height: 49,
    backgroundColor: '#EAEAEA',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
    shadowOpacity: 0.2,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
});
export default CustomButton;
