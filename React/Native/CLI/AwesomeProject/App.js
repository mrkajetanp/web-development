import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import PizzaTranslator from './components/HandlingInput';
// import ButtonBasics from './components/ButtonBasics';
// import Touchables from './components/Touchables';
// import Scrolling from './components/Scrolling';
// import Lists from './components/Lists';
import Networking from './components/Networking';

// class Greeting extends Component {
//     propTypes = {
//         name: String,
//     };
//
//     render() {
//         return (
//             <View style={{ alignItems: 'center' }}>
//                 <Text>Hello {this.props.name}!</Text>
//             </View>
//         );
//     }
// }

export default class App extends Component {
    render() {
        return (
            <Networking />
        );
    }
}
