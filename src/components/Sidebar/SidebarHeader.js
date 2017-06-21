import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const SidebarHeader = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/profile_sample.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.email}>janed@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50, 
    borderRadius: 25
  },
  infoContainer: {
    marginLeft: 20
  },
  name: {
    fontSize: 19,
    marginBottom: 5,
    color: '#666'
  },
  email: {
    fontSize: 14,
    color: '#a1a1a1'
  }
});



export default SidebarHeader;
