import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
  fetch(URL, {
      method: 'POST'
  }).then(response => response.json())
  .then(json => { this.setState({json}); });

  return (
    <SafeAreaView style={backgroundStyle}>
      
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
