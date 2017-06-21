import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BurgerIcon = (props) => {
  return (
    <View style={{ position: 'absolute', left: 15, top: 20 }}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <Ionicons name='ios-menu' size={props.size} color={props.color} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default BurgerIcon;
