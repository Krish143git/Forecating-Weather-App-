
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import WeatherInput from './components/WeatherScreen/WeatherInput'
const App = () => {
  return (
    <>
       <WeatherInput />
    </>
  )
}

export default App;
