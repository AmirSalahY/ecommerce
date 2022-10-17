// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PageScreen from './src/screens/PageScreen';
import {SvgXml} from 'react-native-svg';
import BackArrow from './src/assets/icons/BackArrow';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RightIcon from './src/assets/icons/transaction-icon-gray.svg';
import ModelScreen from './src/screens/ModelScreen';
import ProductScreen from './src/screens/ProductScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Page"
          component={PageScreen}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#DEDEDE'},
            headerRight: () => (
              <View>
                <RightIcon width={26} height={26} />
                <Text style={styles.headerCtaSub}>Proccess</Text>
              </View>
            ),
            headerLeft: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.goBack()}>
                  <SvgXml xml={BackArrow} width={29} height={29} />
                  <Text style={styles.headerCtaSub}>Back</Text>
                </TouchableOpacity>
                <Text style={{marginLeft: 13.48}}>Picture</Text>
              </View>
            ),
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Model"
          component={ModelScreen}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#DEDEDE'},
            headerLeft: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.goBack()}>
                  <SvgXml xml={BackArrow} width={29} height={29} />
                  <Text style={styles.headerCtaSub}>Back</Text>
                </TouchableOpacity>
                <Text style={{marginLeft: 13.48}}>Model</Text>
              </View>
            ),
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#DEDEDE'},
            headerLeft: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.goBack()}>
                  <SvgXml xml={BackArrow} width={29} height={29} />
                  <Text style={styles.headerCtaSub}>Back</Text>
                </TouchableOpacity>
                <Text style={{marginLeft: 13.48}}>Model Details</Text>
              </View>
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
    backgroundColor: '#DEDEDE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.15,
    elevation: 3,
  },
  headerCtaSub: {
    color: '#4E4E4E',
    fontSize: 6,
    marginTop: 1.48,
    fontWeight: 'bold',
  },
});
export default App;
