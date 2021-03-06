import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#6646ee' />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});