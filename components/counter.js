import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class hello1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <View style={{ height: 29, width: 78, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    if(this.state.count>0)
                    this.setState({ count: this.state.count - 1 })
                }}>
                    <View style={{ borderTopLeftRadius: 14.5, borderBottomLeftRadius: 14.5, borderWidth: 1, borderColor: 'blue', justifyContent: 'space-around', height: 29 }}>
                        <Text style={{ color: 'blue' }}>   -    </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'blue', justifyContent: 'space-around' }}>
                    <Text style={{ color: '#fff' }}>   {this.state.count}   </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>
                    <View style={{ borderTopRightRadius: 14.5, borderBottomRightRadius: 14.5, borderWidth: 1, borderColor: 'blue', justifyContent: 'space-around', height: 29 }}>
                        <Text style={{ color: 'blue' }}>   +  </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: 'center',
        height: 32,
        width: 51,
        borderColor: 'gray',
        justifyContent: 'space-around'
    },

    linearGradient1: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: 'center',
        height: 32,
        width: 51,
        borderColor: 'gray',
        borderBottomLeftRadius: 16,
        borderTopLeftRadius: 16,
        justifyContent: 'space-around'
    },

    linearGradient2: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: 'center',
        height: 32,
        width: 51,
        borderColor: 'gray',
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
        justifyContent: 'space-around'
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
})