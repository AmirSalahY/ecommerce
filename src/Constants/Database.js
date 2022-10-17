import sqlite from 'react-native-sqlite-storage';

const db = sqlite.openDatabase(
  {
    name: 'ecommerce.sqlite3',
    createFromLocation: '~www/ecommerce.sqlite3',
  },
  () => {
    console.log('success');
  },
  error => {
    console.log('error while opening DB: ' + error);
  },
);
export default db;
