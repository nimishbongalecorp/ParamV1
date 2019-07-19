import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Image, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardItem } from 'native-base';
import { ToastAndroid } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class MyApp extends Component {
    constructor() {
        super();
        this.state = {
            ViewArray: [],
            custname: '',
            email: '',
            contactNumber: '',
            aboutYourSelf: '',
            password: '',
            unitprice: '',
            name: '',
            qty: '',
            amt: '',
            custnote: '',
            pressbut: false,
            height: 0,
        }
        this.animatedValue = new Animated.Value(0);
        this.Array_Value_Index = 0;
    }

    Add_New_View_Function = () => {
        this.animatedValue.setValue(0);
        let New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }
        this.setState({ Disable_Button: true, ViewArray: [...this.state.ViewArray, New_Added_View_Value] }, () => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true
                }
            ).start(() => {
                this.Array_Value_Index = this.Array_Value_Index + 1;
                this.setState({ Disable_Button: false });
            });
        });
    }

    render() {
        const AnimationValue = this.animatedValue.interpolate(
            {
                inputRange: [0, 1],
                outputRange: [-59, 0]
            });

        let Render_Animated_View = this.state.ViewArray.map((item, key) => {
            if ((key) == this.Array_Value_Index) {
                return (
                    <Animated.View
                        key={key}
                        style={[styles.Animated_View_Style, { opacity: this.animatedValue, transform: [{ translateY: AnimationValue }] }]}>
                        <SafeAreaView forceInset={{ bottom: 'always' }} style={styles.safe} onPress={() => {
                            Keyboard.dismiss()
                        }}>
                            <KeyboardAwareScrollView ref='scrollView' contentContainerStyle={styles.scrollStyle}>
                                <View style={{ width: 326, alignSelf: 'center' }}>
                                    <Card styles={{elevation:3}}>
                                        <CardItem>
                                            <TextInput
                                                placeholder={'Name                                                                  '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'default'}
                                                value={this.state.name}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ name: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Type'}
                                                placeholder={'Type                                                                    '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'default'}
                                                value={this.state.password}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ password: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Unit Price'}
                                                placeholder={'Unit Price                                                                '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'phone-pad'}
                                                value={this.state.unitprice}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ unitprice: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Quantity'}
                                                placeholder={'Quantity                                                                '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'phone-pad'}
                                                value={this.state.qty}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ qty: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Amount'}
                                                placeholder={'Amount                                                                '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'phone-pad'}
                                                value={this.state.amt}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ amt: value })}
                                            />
                                        </CardItem>
                                    </Card>
                                    <Text style={styles.text2}> {'\n'}+Add Another Line   |   +Add items in bulk   | {'\n'} Scan Bar Code{'\n'}</Text>
                                </View>
                            </KeyboardAwareScrollView>
                        </SafeAreaView>
                    </Animated.View>
                );
            }
            else {
                return (
                    <View
                        key={key}
                        style={styles.Animated_View_Style}>
                        <SafeAreaView forceInset={{ bottom: 'always' }} style={styles.safe} onPress={() => {
                            Keyboard.dismiss()
                        }}>
                            <KeyboardAwareScrollView ref='scrollView' contentContainerStyle={styles.scrollStyle}>
                                <View style={{ width: 350, alignSelf: 'center' }}>
                                    <Card style={{ elevation: 3 }}>
                                        <CardItem>
                                            <TextInput
                                                placeholder={'Name                                                                  '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'default'}
                                                value={this.state.name}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ name: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Type'}
                                                placeholder={'Type                                                                    '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'default'}
                                                value={this.state.password}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ password: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Unit Price'}
                                                placeholder={'Unit Price                                                                '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'phone-pad'}
                                                value={this.state.unitprice}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ unitprice: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Quantity'}
                                                placeholder={'Quantity                                                                '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'phone-pad'}
                                                value={this.state.qty}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ qty: value })}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <TextInput
                                                ref={'Amount'}
                                                placeholder={'Amount                                                                '}
                                                placeholderTextColor={'gray'}
                                                placeholderStyle={styles.placeholderStyle}
                                                underlineColorAndroid='transparent'
                                                keyboardType={'phone-pad'}
                                                value={this.state.amt}
                                                style={styles.textInputStyle}
                                                onChangeText={(value) => this.setState({ amt: value })}
                                            />
                                        </CardItem>
                                    </Card>
                                </View>
                            </KeyboardAwareScrollView>
                        </SafeAreaView>
                    </View>
                );
            }
        });

        return (
            <View style={styles.MainContainer}>
                <ScrollView>
                    <View>
                        {
                            Render_Animated_View
                        }
                    </View>
                    <View style={{backgroundColor:'#f8f9fd'}}>
                    <TouchableOpacity style={{ backgroundColor: '#f8f9fd' }}
                        onPress={this.Add_New_View_Function}>
                        <Text style={styles.text2}> {'\n'}+Add Another Line   |   +Add items in bulk   | {'\n'} Scan Bar Code{'\n'}</Text>
                        </TouchableOpacity>
                        </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            backgroundColor: '#f8f9fd',
            justifyContent: 'center',
        },

        Animated_View_Style:
        {
            height: 374,
            backgroundColor: '#f8f9fd',
            alignItems: 'center',
            justifyContent: 'center',
        },

        View_Inside_Text:
        {
            color: '#f8f9fd',
            fontSize: 24
        },

        TouchableOpacityStyle: {

            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
        },

        container: {
            flex: 1
        },

        safe: {
            flex: 1,
            backgroundColor: '#F2F4FF',
        },
        text1: {
            color: 'gray',
            fontFamily: 'Avenir-Heavy',
            fontSize: 16,
        },

        text2: {
            color: '#0077ff',
            fontFamily: 'ProximaNova-Regular',
            fontSize: 14,
            backgroundColor: '#f8f9fd'
        },

        buttoncontainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },

        placeholderStyle: {
            fontSize: 14,
            color: '#fff',
        },
        scrollStyle: {
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor: '#F2F4FF',
        },
        textInputStyle: {
            height: 35,
            color: '#000',
            fontSize: 14,
            textAlign: 'left',
            textAlignVertical: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingLeft: 10,
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 0.5,
            backgroundColor: '#fff',
            borderBottomWidth: 2,
            borderBottomColor: '#e6e6e6',
        },
    });