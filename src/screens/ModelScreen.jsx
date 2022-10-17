import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import ModelsTile from '../Components/ModelsTile';
import QrCode from '../assets/icons/qrCode.svg';
import CustomTextInput from '../Components/CustomTextInput';
import db from '../Constants/Database';
const ModelScreen = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const search = text => {
    console.log(text);
    setLoading(true);
    db.transaction(function (txn) {
      txn.executeSql(
        'SELECT * FROM Models WHERE modelCategory LIKE ?',
        ['%' + text + '%'],
        (tx, results) => {
          var rawCategories = [];
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            rawCategories.push(row);
          }
          console.log(rawCategories);
          setCategories(rawCategories);
          setLoading(false);
        },
      );
    });
  };
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM Models', [], (tx, results) => {
        var rawCategories = [];
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          rawCategories.push(row);
        }
        setCategories(rawCategories);
        setLoading(false);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomTextInput onChange={search}>
        <QrCode />
      </CustomTextInput>

      {!loading ? (
        <FlatList
          data={categories}
          numColumns={2}
          renderItem={({item, index}) => (
            <ModelsTile key={index.toString()} item={item} />
          )}
        />
      ) : (
        <ActivityIndicator size={30} />
      )}
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
