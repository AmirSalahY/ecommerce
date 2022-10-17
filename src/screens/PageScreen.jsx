import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import CustomButton from '../Components/CustomButton';
import StockFileIcon from '../assets/icons/stock-file-icon-gray.svg';
import VendorsIcon from '../assets/icons/vendors-icon-gray.svg';
import GreenRightArrow from '../assets/icons/arrow-right-gray1.svg';

const PageScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomButton onPress={() => navigation.navigate('Model')}>
        <View style={styles.innerButton}>
          <StockFileIcon />
          <Text style={styles.ctaText}>Asset Inventory</Text>
        </View>
        <GreenRightArrow />
      </CustomButton>
      <CustomButton>
        <View style={styles.innerButton}>
          <VendorsIcon />
          <Text style={styles.ctaText}>Model</Text>
        </View>
        <GreenRightArrow />
      </CustomButton>
      <CustomButton>
        <View style={styles.innerButton}>
          <VendorsIcon />
          <Text style={styles.ctaText}>Person</Text>
        </View>
        <GreenRightArrow />
      </CustomButton>
    </View>
  );
};
const styles = StyleSheet.create({
  ctaText: {
    fontSize: 18,
    marginLeft: 12,
    color: '#4E4E4E',
    fontFamily: 'OpenSans-Regular',
    fontWeight: '500',
  },
  container: {
    backgroundColor: '#F4F5F5',
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  header: {
    height: 53,
    backgroundColor: '#DEDEDE',
    flexDirection: 'row',
  },
  innerButton: {flexDirection: 'row', justifyContent: 'flex-start'},
});

export default PageScreen;
