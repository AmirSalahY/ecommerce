import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetailsRow = ({descriptionMain, descriptionSub}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.descriptionMain}>{descriptionMain}</Text>
      {descriptionSub ? (
        <Text style={styles.descriptionSub}>{descriptionSub}</Text>
      ) : null}
    </View>
  );
};

export default ProductDetailsRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 17,
  },
  descriptionMain: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: '#4E4E4E',
  },
  descriptionSub: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4E4E4E',
  },
});
