import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';
import { View, Button, Container, Header, Footer, Left, Right, Body, Title, Icon } from 'native-base';
import { createSwitchNavigator } from 'react-navigation';
import Dashboard from './components/dashboard'
import Configs from './config';
import { NavigationActions, StackActions } from 'react-navigation';
import _ from 'lodash';


const {
  colors: { yellow, white, youth },
  font,
  Loader
} = Configs;

class App extends Component {

  state = {
    loading: false
  }

	static navigationOptions = {
		header: null
	};

  setLoader = () => {
    const {loading} = this.state;
    this.setState({'loading': !loading})
    // alert(loading)

  }
  
  render (){
    const {AppContainerStyle, ButtonContainerStyle, textLabelStyle, AppViewStyle} = styles;
    const {loading} = this.state
    return(
      <Container>
        {/* <Header style={[{}]} transparent={true}/> */}
        <Header style={{backgroundColor: yellow}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right></Right>
        </Header>
        <Container style = {[AppContainerStyle]}>
          <View style = {AppViewStyle} >
            {loading?Loader: <React.Fragment />}
            <Button onPress={ () => this.setLoader() } primary={true} style={[ButtonContainerStyle]}>
                  <Text style={textLabelStyle}>Offers</Text>
            </Button>
            {loading?<Text style={[textLabelStyle, {alignSelf:'center', fontSize:font.size*0.75}]}>loading...</Text>: <React.Fragment />}
          </View>
        </Container>
        <Footer />
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  AppContainerStyle: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: font.size,
    backgroundColor: white
  },
  AppViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    padding: font.size*1.25,
    maxHeight: 140,
    backgroundColor: youth,
    borderTopLeftRadius: font.size * 3,
    borderBottomRightRadius: font.size * 3
  },
  ButtonContainerStyle: {
    width: font.size*12,
    justifyContent: 'center',       
    alignSelf: 'center',
    borderRadius: font.size*3,
    elevation: 0,
    backgroundColor: yellow
  },
  textLabelStyle: {
    color: white,
    fontSize: 20,
  }
})

let codePushOptions = { 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, 
  installMode: codePush.InstallMode.ON_NEXT_RESUME 
}

App = codePush(codePushOptions)(App);

export default App;
