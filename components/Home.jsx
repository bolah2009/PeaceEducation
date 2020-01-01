import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Constants from 'expo-constants';

import MenuCard from './MenuCard';

const heroImageSource = require('../assets/redelephant-large.jpg');

// Menu Images
const about = require('../assets/about.png');
const library = require('../assets/library.png');
const peace = require('../assets/peace.png');
const quiz = require('../assets/quiz.png');

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.heroImageContainer}>
      <Image source={heroImageSource} style={styles.heroImage} />
    </View>
    <View style={styles.menu}>
      <MenuCard navigation={navigation} source={library} path="Library" title="Library" />
      <MenuCard navigation={navigation} source={peace} path="Peace" title="Peace Building" />
      <MenuCard navigation={navigation} source={quiz} path="Quiz" title="Quiz" />
      <MenuCard navigation={navigation} source={about} path="About" title="About" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: (Constants && Constants.statusBarHeight) || 16,
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  heroImage: {
    flex: 1,
    width: undefined,
    height: 100,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImageContainer: {
    flex: 3,
  },
  menu: {
    flex: 7,
    margin: 8,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'row',
  },
});

export default Home;
