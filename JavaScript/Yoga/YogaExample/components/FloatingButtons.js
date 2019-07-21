import React, { Component } from 'react';
import { View } from 'react-native';

export default class FloatingButtons extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                width: 500,
                height: 500
            }}>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    positionLeft: 'auto',
                    positionTop: 'auto',
                    positionRight: 10,
                    positionBottom: 10,
                    position: 'absolute',
                }} />
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
            </View>
        );
    }
}
