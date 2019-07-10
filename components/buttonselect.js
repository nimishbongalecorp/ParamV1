import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';

export default class hello extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ borderColor: 'gray' }}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']}>
                        <Text style={styles.buttonText}>
                            Private
                    </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']}>
                        <Text style={styles.buttonText}>
                            Protected
                     </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']} onAccessibilityTap={() => { this.setState }}>
                        <Text style={styles.buttonText}>
                            Public
                     </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: 'center',
        height: 32,
        width: 96,
        borderColor: 'gray',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 2,
        color: '#ffffff',
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },
    buttonTextnew: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 2,
        color: '#000',
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },
});