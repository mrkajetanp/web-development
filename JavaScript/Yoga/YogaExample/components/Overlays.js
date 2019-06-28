import React, { Component } from 'react';
import { View } from 'react-native';

export default class Overlays extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                width: 500,
                height: 500,
            }}>

                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }}/>

                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }}/>

                <View style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}/>
                
            </View>
        );
    }
};
