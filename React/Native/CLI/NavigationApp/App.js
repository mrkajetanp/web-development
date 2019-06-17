import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.red}>Home Screen</Text>
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Details')}
                    />
                </View>
            </View>
        );
    }
}

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./assets/react_logo.png')} />
                <Text style={{ color: 'red'}}>Details Screen</Text>
                <View style={{marginBottom: 20}}>
                    <Button
                        title="Go to Details... again"
                        onPress={() => this.props.navigation.push('Details')}
                    />
                    <Button
                        title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

DetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
