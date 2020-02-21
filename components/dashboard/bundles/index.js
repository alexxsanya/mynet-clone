import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';
import { View, Button } from 'native-base';

class BundleScreen extends Component {
  
    render (){
        const { navButtonStyle, containerStye } = styles;
    
        return(
            <View style={containerStye}>
            <Text> Bundle Screen</Text>
            <Button title='Home Screen' onPress={
                () => this.props.navigation.navigate('Dashboard') } 
                style = {navButtonStyle}
                />
            </View>
        )
    }
  }

const styles = StyleSheet.create({
    containerStye: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding:40,
    },
    navButtonStyle: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: '400',
    width: 20,
    borderRadius: 30
    }
});

export default BundleScreen;