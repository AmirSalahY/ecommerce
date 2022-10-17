import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ModelsTile from '../Components/ModelsTile';
import QrCode from '../assets/icons/qrCode.svg';
import CustomTextInput from '../Components/CustomTextInput';
const data = [
  {
    title: 'Printer Hs',
    image: require('../assets/images/printer.png'),
    category: 'printers',
  },
  {
    title: 'LCD XS',
    image: require('../assets/images/lcd.png'),
    category: 'lcds',
  },
  {
    title: 'Laptops',
    image: require('../assets/images/laptop.png'),
    category: 'laptops',
  },
  {
    title: 'Printers Inc',
    image: require('../assets/images/printerinc.png'),
    category: 'printersinc',
  },
];
const ModelScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput>
        <QrCode />
      </CustomTextInput>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => (
          <ModelsTile key={index.toString()} item={item} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ModelScreen;
