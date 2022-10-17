import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BackArrow from '../assets/icons/BackArrow';
import {SvgXml} from 'react-native-svg';

const HeaderLeft = ({navigation, title}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.cta}
        onPress={() => (title != 'Picture' ? navigation.goBack() : null)}>
        <SvgXml xml={BackArrow} width={29} height={29} />
        <Text style={styles.headerCtaSub}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.ctaTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerCtaSub: {
    color: '#4E4E4E',
    fontSize: 6,
    marginTop: 1.48,
    fontWeight: 'bold',
  },
  headerContainer: {flexDirection: 'row', alignItems: 'center'},
  cta: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaTitle: {marginLeft: 13.48},
});
export default HeaderLeft;
