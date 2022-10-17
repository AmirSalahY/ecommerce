// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import PageScreen from './src/screens/PageScreen';
import RightIcon from './src/assets/icons/transaction-icon-gray.svg';
import ModelScreen from './src/screens/ModelScreen';
import ProductScreen from './src/screens/ProductScreen';
import HeaderLeft from './src/Components/HeaderLeft';
import EditIcon from './src/assets/icons/edit-icon.svg';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';
const Stack = createNativeStackNavigator();
const BACKGROUND_COLOR = '#DEDEDE';
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page"
          component={PageScreen}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: BACKGROUND_COLOR},
            headerRight: () => (
              <View>
                <RightIcon width={26} height={26} />
                <Text style={styles.headerCtaSub}>Proccess</Text>
              </View>
            ),
            headerLeft: () => (
              <HeaderLeft title="Picture" navigation={navigation} />
            ),
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Model"
          component={ModelScreen}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: BACKGROUND_COLOR},
            headerLeft: () => (
              <HeaderLeft title="Model" navigation={navigation} />
            ),
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: BACKGROUND_COLOR},
            headerLeft: () => (
              <HeaderLeft title="Model Details" navigation={navigation} />
            ),
            headerRight: () => (
              <ShadowView style={styles.editIcon}>
                <EditIcon />
                <Text style={styles.editText}>Edit</Text>
              </ShadowView>
            ),
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 53,
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.15,
    elevation: 3,
  },
  editIcon: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {height: 3, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editText: {
    marginLeft: 5,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 10,
  },
  headerCtaSub: {
    color: '#4E4E4E',
    fontSize: 6,
    marginTop: 1.48,
    fontWeight: 'bold',
  },
});
export default App;
