import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class hello1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            presbut: 1
        }
    }

    render() {
        if (this.state.presbut === 1) {
            return (
                <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#f8f9fd' }}>
                    <TouchableOpacity style={{ borderColor: 'gray' }}>
                        <LinearGradient style={styles.linearGradient1} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']}>
                            <Image source={require('./assets/hamburger.png')} style={{ height: 13, width: 16 }} />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 2 })
                        this.props.setParentState({ presbut: 2 })
                    }}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#FFF', '#fff']}>
                            <Image source={require('./assets/bar_chart.png')} style={{ height: 15, width: 19 }} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 3 })
                        this.props.setParentState({ presbut: 3 })
                    }}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']} >
                            <Image source={require('./assets/invalid_name.png')} style={{ height: 17, width: 18 }} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 4 })
                        this.props.setParentState({ presbut: 4 })
                    }}>
                        <LinearGradient style={styles.linearGradient2} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']} >
                            <Icon name='circle-o' color={'#B7B7B7'} type='font-awesome' />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (this.state.presbut === 2) {
            return (
                <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#f8f9fd' }}>
                    <TouchableOpacity style={{ borderColor: 'gray' }} onPress={() => {
                        this.setState({ presbut: 1 })
                        this.props.setParentState({ presbut: 1 })
                    }}>
                        <LinearGradient style={styles.linearGradient1} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']}>
                            <Icon name="menu" color="#B7B7B7" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']}>
                            <Icon name="signal" type="font-awesome" color="#fff" height={17} width={18} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 3 })
                        this.props.setParentState({ presbut: 3 })
                    }}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']}>
                            <Image source={require('./assets/invalid_name.png')} style={{ height: 17, width: 18 }} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 4 })
                        this.props.setParentState({ presbut: 4 })
                    }}>
                        <LinearGradient style={styles.linearGradient2} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']} >
                            <Icon name='circle-o' color={'#B7B7B7'} type='font-awesome' />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            )
        }
        else if (this.state.presbut === 3) {
            return (
                <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#f8f9fd' }}>
                    <TouchableOpacity style={{ borderColor: 'gray' }} onPress={() => {
                        this.setState({ presbut: 1 })
                        this.props.setParentState({ presbut: 1 })
                    }}>
                        <LinearGradient style={styles.linearGradient1} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']}>
                            <Icon name="menu" color="#B7B7B7" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 2 })
                        this.props.setParentState({ presbut: 2 })
                    }}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#FFF', '#fff']}>
                            <Image source={require('./assets/bar_chart.png')} style={{ height: 15, width: 19 }} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']} >
                            <Text style={{ color: "#fff", fontWeight: 'bold' }}>{'{ ; }'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 4 })
                        this.props.setParentState({ presbut: 4 })
                    }}>
                        <LinearGradient style={styles.linearGradient2} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']} >
                            <Icon name='circle-o' color={'#B7B7B7'} type='font-awesome' />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return (
                <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#f8f9fd' }}>
                    <TouchableOpacity style={{ borderColor: 'gray' }} onPress={() => {
                        this.setState({ presbut: 1 })
                        this.props.setParentState({ presbut: 1 })
                    }}>
                        <LinearGradient style={styles.linearGradient1} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']}>
                            <Icon name="menu" color="#B7B7B7" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 2 })
                        this.props.setParentState({ presbut: 2 })
                    }}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']}>
                            <Image source={require('./assets/bar_chart.png')} style={{ height: 15, width: 19 }} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({ presbut: 3 })
                        this.props.setParentState({ presbut: 3 })
                    }}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fff', '#fff', '#fff']} >
                            <Image source={require('./assets/invalid_name.png')} style={{ height: 17, width: 18 }} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient style={styles.linearGradient2} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6c5cff', '#A477FF', '#d379e2']} >
                            <Icon name='circle-o' color="#fff" type='font-awesome' />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            )
        }
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