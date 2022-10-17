import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NoteTile = ({noteDetails}) => {
  return (
    <View>
      <Text style={styles.userName}>{noteDetails.noteBy}</Text>
      <Text style={styles.noteDate}>{noteDetails.noteDate}</Text>
      <Text style={styles.noteDetails}>{noteDetails.noteDetails}</Text>
    </View>
  );
};

export default NoteTile;

const styles = StyleSheet.create({
  userName: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#4E4E4E',
  },
  noteDate: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 8,
    color: '#4E4E4E',
  },
  noteDetails: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    fontColor: '#4E4E4E',
  },
});
