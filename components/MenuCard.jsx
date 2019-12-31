import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MenuCard = ({ title, source }) => (
  <View style={styles.menuCard}>
    <View style={styles.menuCardImageWrap}>
      <Image source={source} style={styles.menuCardImage} />
    </View>
    <View style={styles.menuCardTextWrap}>
      <Text style={styles.menuCardText}>{title}</Text>
    </View>
  </View>
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
