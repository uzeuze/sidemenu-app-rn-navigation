import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const SidebarItem = (props) => {
  let color = (props.screen === props.name) ? '#cd4b71' : '#d1d1d1';
  let textColor = (props.screen === props.name) ? '#cd4b71' : '#666';

  const handleOnPress = () => {
    if (props.name === 'Login') {
      props.login();
      props.navigation.navigate('Home');
    } else if (props.name === 'Logout') {
      props.logout();
      props.navigation.navigate('Home');
    } else {
      props.navigation.navigate(props.name);
    }
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        {
          props.iconName === 'user-circle' ?
          <FontAwesome name={props.iconName} size={26} color={color}/> :
          <Ionicons name={props.iconName} size={32} color={color} />
        }
        <View style={styles.textContainer}>
          <Text style={[styles.name, {color: textColor}]}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 18,
  },
  name: {
    fontSize: 14,
    color: '#666'
  },
  textContainer: {
    height: 32,
    justifyContent: 'center',
    paddingLeft: 20
  }
});



export default SidebarItem;
