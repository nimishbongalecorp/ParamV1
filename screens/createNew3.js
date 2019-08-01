import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, findNodeHandle } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Card, CardItem } from 'native-base';
import { Icon } from 'react-native-elements';
import ButtonSelect from '../components/buttonSelect';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        }
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#F2F4FF',
            elevation: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize: 32,
        },


        headerLeft: (
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: '#000' }}>Create New Invoice</Text>
            </View>
        ),

        headerRight: (
            <TouchableOpacity onPress={() => {
                navigation.pop()
            }}>
                <View style={{ paddingRight: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 23, color: '#000' }}>X</Text>
                </View>
            </TouchableOpacity>
        ),
    });

    inputFocused(refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]), 100, true);
        }, 50);
    }

    render() {
        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={styles.safe} onPress={() => {
                Keyboard.dismiss()
            }}>
                <KeyboardAwareScrollView ref='scrollView' contentContainerStyle={styles.scrollStyle}>
                    <View style={{ marginLeft: 12, marginRight: 12, alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, fontWeight: 'bold' }}>{'\n'}  Basic Details</Text>
                        <Card styles={{ elevation: 3 }}>
                            <CardItem>
                                <Text style={{ color: 'gray' }}>Quotation Type</Text>
                            </CardItem>
                            <CardItem>
                                <ButtonSelect />
                            </CardItem>
                            <CardItem>
                                <Text>Private Invoices are end to end encrypted{'\n\n\n'}</Text>
                            </CardItem>
                            <CardItem>
                                <TextInput
                                    placeholder={'Invoice Date                                                       '}
                                    placeholderTextColor={'gray'}
                                    placeholderStyle={styles.placeholderStyle}
                                    underlineColorAndroid='transparent'
                                    keyboardType={'phone-pad'}
                                    value={this.state.contactNumber}
                                    style={styles.textInputStyle}
                                    onChangeText={(value) => this.setState({ contactNumber: value })}
                                />
                                <Icon name='calendar' type='font-awesome' iconStyle={{ height: 24, width: 23 }} />
                            </CardItem>
                        </Card>
                        <Card styles={{ elevation: 3 }}>
                            <CardItem>
                                <Text>{'\n\n\n\n'}</Text>
                                <TextInput
                                    ref={'Custom Note'}
                                    placeholder={'Add Custom Note                                                                   '}
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
                        <Text>* Param Document ID for this invoice will be autogenerated</Text>
                        <View style={{ paddingTop: 45, justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <Button iconRight onPress={() => {
                                this.props.navigation.navigate('CreateNew4')
                            }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#fff' }}>            NEXT   </Text>
                                    <View style={{ paddingRight: 40 }}>
                                        <Icon color="#fff" name='chevron-right' type="font-awesome" size={15} />
                                    </View>
                                </View>
                            </Button>
                        </View>
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
    },

    placeholderStyle: {
        fontSize: 14,
        color: '#fff',
    },
    scrollStyle: {
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
})

