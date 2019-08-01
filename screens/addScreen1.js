import React, { Component } from 'react';
import { Text, View, StyleSheet, findNodeHandle, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Content, Container, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import HorizontalCards from '../components/horizontalCard'

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
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 23 }}>X</Text>
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
            <KeyboardAwareScrollView ref='scrollView' contentContainerStyle={styles.scrollStyle}>
                <Container style={{ backgroundColor: '#F2F4FF' }}>
                    <Content>
                        <View style={{ marginLeft: 12, marginRight: 12 }}>
                            <Text style={styles.text1}>{'\n'}  Recent Contacts{'\n'}</Text>
                            <HorizontalCards />
                            <TouchableOpacity>
                                <Text style={{ color: '#0077ff', fontFamily: 'Lato-Bold' }}>{'\n'}  Select from Contacts</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 150, alignSelf: 'flex-end', paddingTop: 80 }}>
                            <Button iconRight onPress={() => {
                                this.props.navigation.navigate('CreateNew2')
                            }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#fff' }}>            NEXT   </Text>
                                    <View style={{ paddingRight: 40 }}>
                                        <Icon color="#fff" name='chevron-right' type="font-awesome" size={15} />
                                    </View>
                                </View>
                            </Button>
                            <Text />
                        </View>
                    </Content>
                </Container>
            </KeyboardAwareScrollView>
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

    circlething: {
        height: 25,
        width: 25,
        borderBottomLeftRadius: 12.5,
        borderBottomRightRadius: 12.5,
        borderTopLeftRadius: 12.5,
        borderTopRightRadius: 12.5,
        borderColor: '#B2B2B2',
        borderWidth: 1
    },
    text1: {
        color: '#878787',
        fontFamily: 'Avenir-Heavy',
        fontSize: 17,
        fontWeight: 'bold'
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

