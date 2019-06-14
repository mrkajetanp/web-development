import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FlexDimensionsBasics from './components/FlexDimensions';

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export default class App extends Component {
  render() {
    return (
        <FlexDimensionsBasics />
    );
  }
}
