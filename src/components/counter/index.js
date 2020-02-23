import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Container, Content, Text, Icon, Header, Body, Button, Footer, FooterTab, Left, Title, Right } from 'native-base';
import { increment, decrement, logRecord } from '../../actions/reducerActions';


import Curved, {BadgeCurve} from '../common/curve'
import config from '../../config'

const {font, colors} = config

class Counter extends Component{
    render(){
        console.log(this.props.count);
        const { count } = this.props;
        
        return(
          <Container>
            <Header noShadow={true} > 
              {/* <Left>
                <Button transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left> */}
              <Body>
                <Title>Appclone</Title>
              </Body>
              <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
            </Header>
            <Content padder contentContainerStyle={styles.contentStyles}>
              <View style={styles.cardItemStyle}>
                <Curved />
                <Text style={styles.textInputStyle}>
                  {this.props.count}
                </Text>
              </View> 

            </Content>
            <Footer backgroundColor='brandPrimary'>
              <FooterTab>
                <Button onPress= {() => this.props.increment()}>
                  <Icon name="ios-add-circle" />
                </Button>
                <Button onPress= {() => this.props.decrement()}>
                  <Icon name="minus-circle" />
                </Button>
                <Button active onPress= {() => this.props.logRecord(count)}>
                  <Icon active name="save" />
                </Button>
                <Button>
                  <Icon name="person" />
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
      }
}

const styles = StyleSheet.create({
  contentStyles: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  textInputStyle: {
    position: 'absolute',
    top:font.size*2.25,
    left: font.size * 11.5,
    fontSize: font.size*1.25,
    color: 'gray'
  },

  cardItemStyle: {
    borderWidth:0,
    position:'relative'
  },

});
// mapStateToProps => This function, simply takes your reducer data, that is required, 
// and converts it into a usable Prop. Now we can use the data as a prop. example this.props.data.
mapStateToProps = (state) => {
    return{
      count : state.count
    };
}
// Note: 
// Remember how we allotted names to Reducers in the combineReducers function. We use the same name to call respective Reducer.

// matchDispatchToProps => This function simply converts our Actions into usable props.
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({action1: importedAction1, action2: importedAction2}, dispatch)
//   }

matchDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increment: increment, 
            decrement: decrement,
            logRecord: logRecord
        },
        dispatch
    )
}
   
// Note: bindActionCreators function here simply combines our actions into a single object.

export default connect(mapStateToProps, matchDispatchToProps)(Counter);
