import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImageContainerShadow from '../Components/ImageContainerShadow';
import UpArrow from '../assets/icons/upArrow.svg';
import ProductDetailsRow from '../Components/ProductDetailsRow';
import CustomTextInput from '../Components/CustomTextInput';
import SaveIcon from '../assets/icons/save-icon-gray.svg';
import NoteTile from '../Components/NoteTile';
import images from '../assets/images';
import moment from 'moment';
import db from '../Constants/Database';

const ProductScreen = ({route}) => {
  const {model} = route.params;
  const [toggleImageInfoSection, setToggleImageInfoSection] = useState(true);
  const [toggleNotesSection, setToggleNotesSection] = useState(true);

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');

  const addNote = () => {
    const date = moment().format('DD:mm:yyyy-hh:MMA');
    db.transaction(function (txn) {
      txn.executeSql('INSERT INTO Notes VALUES (?,?,?,?)', [
        null,
        'Jennifer Smith',
        date,
        note,
      ]);
      getNotes();
    });
  };
  const getNotes = () => {
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM Notes', [], (tx, results) => {
        var rawNotes = [];
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          rawNotes.push(row);
        }
        setNotes(rawNotes);
        setLoading(false);
      });
    });
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.productContainer}>
      <ImageContainerShadow
        image={images[model.modelImage]}
        style={styles.imageContainer}
      />
      <View style={styles.separator} />
      <View style={[styles.row, styles.actionTextContainer]}>
        <Text style={styles.toggleActionText}>Image Info</Text>
        <TouchableOpacity
          style={{
            transform: [
              toggleImageInfoSection ? {rotateX: '0deg'} : {rotateX: '180deg'},
            ],
          }}
          onPress={() => setToggleImageInfoSection(prevState => !prevState)}>
          <UpArrow />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.detailsContainer,
          {display: !toggleImageInfoSection ? 'none' : ''},
        ]}>
        <ProductDetailsRow
          descriptionMain={'Model'}
          descriptionSub={model.modelName}
        />
        <ProductDetailsRow
          descriptionMain={'Model Name'}
          descriptionSub={model.modelName}
        />
        <ProductDetailsRow
          descriptionMain={'Model Type'}
          descriptionSub={model.modelType}
        />
        <ProductDetailsRow descriptionMain={'Cost'} />
        <ProductDetailsRow descriptionMain={'Category'} />
        <ProductDetailsRow descriptionMain={'Additional Description'} />
      </View>
      <View style={styles.separator} />
      <View style={[styles.row, styles.actionTextContainer]}>
        <Text style={styles.toggleActionText}>Notes</Text>
        <TouchableOpacity
          style={{
            transform: [
              toggleNotesSection ? {rotateX: '0deg'} : {rotateX: '180deg'},
            ],
          }}
          onPress={() => setToggleNotesSection(prevState => !prevState)}>
          <UpArrow />
        </TouchableOpacity>
      </View>
      {toggleNotesSection ? (
        <View style={styles.notesSection}>
          <TouchableOpacity
            onPress={() => addNote()}
            style={styles.safeContainer}>
            <SaveIcon width={12.7} height={12.7} />
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
          <CustomTextInput
            onChange={s => setNote(s)}
            placeholder="Add a Note"
          />
          <Text style={styles.notesTitle}>History Notes</Text>
          {!loading ? (
            <View style={styles.notesContainer}>
              {notes.map((item, index) => {
                return (
                  <View key={item.noteId}>
                    <NoteTile noteDetails={item} />
                    {index != notes.length - 1 ? (
                      <View style={[styles.separator, {marginBottom: 15}]} />
                    ) : null}
                  </View>
                );
              })}
            </View>
          ) : (
            <ActivityIndicator size={30} />
          )}
        </View>
      ) : null}
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  actionTextContainer: {width: '87%'},
  container: {alignItems: 'center', paddingBottom: 100},
  detailsContainer: {
    width: '87%',
    alignItems: 'space-between',
  },
  productContainer: {
    flex: 1,
    marginTop: 21,
    marginHorizontal: '2%',
    width: '96%',
    borderRadius: 25,
    backgroundColor: '#EAEAEA',
    paddingVertical: 13,
    paddingBottom: 50,
  },
  imageContainer: {maxHeight: 163, maxWidth: '60%'},
  toggleActionText: {
    color: '#4E4E4E',
    size: 16,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#4E4E4E',
    width: '95%',
    marginTop: 15,
  },
  saveText: {
    margin: 6.3,
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: '#4E4E4E',
  },
  safeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 17,
  },
  notesTitle: {
    marginTop: 14.3,
    marginBottom: 4,
    marginLeft: 10,
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: '#4E4E4E',
  },
  notesContainer: {backgroundColor: '#FFFFFF', borderRadius: 19, padding: 12},
  notesSection: {padding: 15},
});
