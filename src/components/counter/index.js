import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement, logRecord } from '../../actions/reducerActions';

class Counter extends Component{
    render(){
        console.log(this.props.count);
        const { count } = this.props;

        return(
          <Container>
            <Header>
              <Body>
                <Title>Redux Counter</Title>
              </Body>
            </Header>
            <Content padder>
              <Card>
                <CardItem>
                  <Text>
                    {this.props.count}
                  </Text>
                </CardItem>
              </Card>
              <Button dark bordered onPress= {() => this.props.increment()}>
                <Text>Increment</Text>
              </Button>
              <Button dark bordered onPress= {() => this.props.decrement()}>
                <Text>Decrement</Text>
              </Button>
              <Button dark bordered onPress= {() => this.props.logRecord(count)}>
                <Text>Log Data</Text>
              </Button>
            </Content>
          </Container>
        );
      }
}


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
