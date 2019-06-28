import React, { Component } from 'react';
import { View} from 'react-native';

export default class FlexibleText extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                width: 500,
                height: 500,
            }}>
                <View style={{
                    flex: 1,
                    width: 60,
                    height: 60,
                    margin: 20,
                }} />
                <View style={{
                    flex: 1,
                    height: 60,
                    margin: 20,
                    flexGrow: 1,
                }} />
                <View style={{
                    flex: 1,
                    width: 40,
                    height: 40,
                    margin: 20,
                }} />
            </View>
        );
    }
};
