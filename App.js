import React from 'react';
import DrawerNavigator from './navigation/drawerNavigation';
import { StyleSheet, View } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.container}>


        <DrawerNavigator>
          <AppNavigator />
        </DrawerNavigator>


      </View >
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});


