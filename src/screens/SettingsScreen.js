import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import BurgerIcon from '../components/BurgerIcon';
import { setCurrentScreen } from '../actions';

class SettingsScreen extends Component {
  componentDidMount() {
    this.props.setCurrentScreen('Settings');
  }

  render() {
    return (
      <View style={styles.container}>
        <BurgerIcon size={40} color='#fff' onPress={() => { this.props.navigation.navigate('DrawerOpen') }}/>
        <Text style={{ color: '#fff' }}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#322e3f'
  }
});

export default connect(null, { setCurrentScreen })(SettingsScreen);
