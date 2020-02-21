import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';
import { View, Button, Container } from 'native-base';
import { createSwitchNavigator } from 'react-navigation';
import Dashboard from './components/dashboard'

class App extends Component {

  state = {
    data: []
  }
  render (){
    const {AppContainerStyle, ButtonContainerStyle, textLabelStyle, AppViewStyle} = styles;
    const {data} = this.state
    return(
      <Container style = {[AppContainerStyle]}>
        <View style = {AppViewStyle} >
          <Button onPress={ () => this.setState({data:this.props})} primary={true} style={[ButtonContainerStyle]}>
                <Text style={textLabelStyle}>Dashboard</Text>
          </Button>
          <Text>{toString(data)}</Text>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  AppContainerStyle: {
    padding: 10,
    backgroundColor: 'black'
  },
  AppViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    maxHeight: 140,
    backgroundColor: 'yellow'
  },
  ButtonContainerStyle: {
    width: 200,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 3,
  },
  textLabelStyle: {
    color: 'white',
    fontSize: 20,
  }
})

export default App;
