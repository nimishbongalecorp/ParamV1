import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, findNodeHandle } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardItem, Left, Right } from 'native-base';
import { ToastAndroid } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import ButtonSelect from '../components/buttonSelect';
import CardAdd from '../components/cardAdd'
import CalendarPicker from 'react-native-calendar-picker';



export default class TextInputInScrollView extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            pressbut: 1,
            height: 0,
            selectedStartDate: null,
        }
        this.onDateChange = this.onDateChange.bind(this);
    }
    static navigationOptions = {
        title: 'Create New Quotation',
        headerStyle: {
            backgroundColor: '#F2F4FF',
            elevation: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontFamily: 'Avenir-Book',
            fontSize: 18,
        },
    };

    inputFocused(refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]), 100, true);
        }, 50);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={styles.safe} onPress={() => {
                Keyboard.dismiss()
            }}>
                <KeyboardAwareScrollView ref='scrollView' contentContainerStyle={styles.scrollStyle}>
                    <View style={[{ paddingLeft: 18, paddingRight: 18, alignSelf: 'center', flex: 1 }]}>
                        <Card styles={{ elevation: 3 }}>
                            <CardItem>
                                <TextInput
                                    placeholder={'Customer Name                                                                '}
                                    placeholderTextColor={'gray'}
                                    placeholderStyle={styles.placeholderStyle}
                                    underlineColorAndroid='transparent'
                                    keyboardType={'default'}
                                    value={this.state.custname}
                                    style={styles.textInputStyle}
                                    onChangeText={(value) => this.setState({ custname: value })}>
                                </TextInput>
                            </CardItem>
                            <CardItem>
                                <Text style={{ color: 'gray' }}>Quotation Type </Text>
                            </CardItem>
                            <CardItem>
                                <ButtonSelect />
                            </CardItem>
                            <CardItem>
                                <Left><Text>Quotation Date</Text></Left>
                                <Right><Icon name='calendar' type='font-awesome' iconStyle={{ height: 24, width: 23, justifyContent: 'flex-end' }} /></Right>
                            </CardItem>
                            <CardItem>
                                <CalendarPicker
                                    onDateChange={this.onDateChange}
                                />
                            </CardItem>
                        </Card>
                        <Text style={styles.text1}>{'\n'}  Add Items</Text>
                        <Card styles={{ elevation: 2 }}>
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
                        <CardAdd />
                        <Card styles={{ elevation: 2 }}>
                            <CardItem>
                                <Text>{'\n\n\n\n\n'}</Text>
                                <TextInput
                                    ref={'Custom Note'}
                                    placeholder={'Add Custom Note here                                                                '}
                                    placeholderTextColor={'gray'}
                                    placeholderStyle={styles.placeholderStyle}
                                    underlineColorAndroid='transparent'
                                    keyboardType={'default'}
                                    value={this.state.custnote}
                                    style={styles.textInputStyle}
                                    onChangeText={(value) => this.setState({ custnote: value })}
                                />
                            </CardItem>
                        </Card>
                        <Text style={{ color: 'gray' }}>    *Param Document ID for this quotation will be autogenerated{'\n\n'}</Text>
                        <View style={styles.buttoncontainer}>
                            <Button color={'#3b7cec'} title='SAVE AS DRAFT' onPress={() => ToastAndroid.show('Saving as Draft...', ToastAndroid.SHORT)}></Button>
                            <Button color={'#3b7cec'} title='SAVE AND SEND' onPress={() => {
                                ToastAndroid.show('Saving and Sending...', ToastAndroid.SHORT);
                                this.props.navigation.navigate('home')
                            }}></Button>
                        </View>
                        <Text></Text>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
        paddingLeft: 12,
        paddingRight: 12
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
})

