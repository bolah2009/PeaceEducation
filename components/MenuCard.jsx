import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const MenuCard = ({ title, source, navigation, path }) => (
  <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate(path)}>
    <View style={styles.menuCardImageWrap}>
      <Image source={source} style={styles.menuCardImage} />
    </View>
    <View style={styles.menuCardTextWrap}>
      <Text style={styles.menuCardText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuCard: {
    width: '45%',
    height: '45%',
    alignItems: 'center',
    borderRadius: 4,
    padding: 8,
    elevation: 4,
  },
  menuCardImageWrap: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 16,
  },
  menuCardImage: {
    width: 120,
    height: 120,
    justifyContent: 'center',
  },
  menuCardTextWrap: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  menuCardText: {
    fontSize: 32,
  },
});

export default MenuCard;
