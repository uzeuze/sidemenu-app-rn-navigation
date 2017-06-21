import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import Separator from './Separator';

class SidebarContent extends Component {
  renderHeader() {
    if (this.props.isAuth) {
      return (
        <View>
          <SidebarHeader />
          <Separator />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <SidebarItem name="Home" iconName="ios-home-outline" {...this.props}/>
        <SidebarItem name="Calendar" iconName="md-calendar" {...this.props}/>
        <SidebarItem name="Profile" iconName="user-circle" {...this.props}/>
        <Separator />
        <SidebarItem name="Settings" iconName="ios-settings-outline" {...this.props}/>
        {
          this.props.isAuth ?
          <SidebarItem name="Logout" iconName="ios-log-out" {...this.props}/>
          :
          <SidebarItem name="Login" iconName="ios-log-in" {...this.props}/>
        }
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 25
  },
});

export default SidebarContent;
