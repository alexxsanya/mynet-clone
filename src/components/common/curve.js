import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg, Path, Use, Circle } from 'react-native-svg';
import { connectStyle } from 'native-base';


export default class Curved extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg height="100" width="100" >
          <Circle cx="50" cy="50" r="50" fill="pink" />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});