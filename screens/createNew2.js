import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from 'react-native-elements';
var { width } = Dimensions.get('window');
import { Card, CardItem, Right, Left, Content, Container, Button } from "native-base";
import Counter from '../components/counter';
import Add from '../components/add';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class helpme extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#2a2a2a',
            elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize: 32,
        },


        headerLeft: (
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: '#fff' }}>Create New Invoice</Text>
            </View>
        ),

        headerRight: (
            <TouchableOpacity onPress={() => {
                navigation.pop()
            }}>
                <View style={{ paddingRight: 20 }}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 23, color: '#fff' }}>X</Text>
                </View>
            </TouchableOpacity>
        ),
    });

    render() {
        return (
            <Container style={{ backgroundColor: '#f8f9fd', paddingLeft: 12, paddingRight: 12 }}>
                <Content>
                    <Text style={{ color: 'gray', fontWeight: 'bold', fontFamily: 'Lato-Regular', fontSize: 16 }}>{'\n'}  Select Items{'\n'}</Text>
                    <Card noShadow>
                        <CardItem>
                            <Left>
                                <TouchableOpacity>
                                    <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                                        <Icon color="blue" size={28} name="barcode" type="font-awesome"></Icon>
                                        <Text style={{ fontSize: 14, color: 'blue' }}>
                                            Scan Bar Code
                                    </Text>
                                    </View>
                                </TouchableOpacity>
                            </Left>
                            <View style={{ borderLeftColor: 'gray', borderLeftWidth: 1, height: 75, width: 35 }}></View>
                            <Right>
                                <TouchableOpacity>
                                    <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                                        <Icon color="blue" size={28} name="superpowers" type="font-awesome"></Icon>
                                        <Text style={{ fontSize: 14, color: 'blue' }}>+ Add in bulk   </Text>
                                    </View>
                                </TouchableOpacity>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card noShadow>
                        <CardItem>
                            <Left>
                                <Text style={{ fontSize: 14, color: '#000' }}>Tempered Glass{'\n\n'}<Text style={{ color: 'gray' }}>Rs.180/unit</Text></Text>
                            </Left>
                            <Right>
                                <Counter />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card noShadow>
                        <CardItem>
                            <Left><View style={{ height: 75, width: 75, backgroundColor: 'gray', flexDirection: 'row' }}></View>
                                <Text>     Pipes 34</Text>
                            </Left>
                            <Right><Add /></Right>

                        </CardItem>
                    </Card>


                    <Card noShadow>
                        <CardItem>
                            <Left><View style={{ height: 75, width: 75, backgroundColor: 'gray', flexDirection: 'row' }}></View>
                                <Text>     Manual Labour</Text>
                            </Left>
                            <Right><Add /></Right>

                        </CardItem>
                    </Card>
                    <View style={{ width: 340, flexDirection: 'row', paddingTop: 25, justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>  Amount:  Rs.180</Text>
                        </View>
                        <View style={{ width: 340, marginRight: 12, paddingLeft: 65 }}>
                            <Button iconRight onPress={() => {
                                this.props.navigation.navigate('CreateNew3')
                            }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#fff' }}>            NEXT   </Text>
                                    <View style={{ paddingRight: 40 }}>
                                        <Icon color="#fff" name='chevron-right' type="font-awesome" size={15} />
                                    </View>
                                </View>
                            </Button>
                        </View>
                        <Text />
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    blockParentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        height: width * 0.2,
        width: width * 0.28,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 12,
    },

    text1: {
        fontFamily: ' Lato-Bold',
        fontSize: 14,
        color: '#222222',
        fontWeight: 'bold',
    },

    text2: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#222222',
        fontWeight: 'normal'
    },

    text3: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: '#354052',
    },

    textpanel: {
        fontFamily: ' PingFangSC-Regular',
        fontSize: 14,
        color: '#354052',
        fontWeight: 'normal'
    },

    innertext: {
        color: 'gray',
        fontSize: 13,
        fontFamily: 'Lato-Regular'
    },
    textPrimary: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    textSecondaryHeading: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'left',
        backgroundColor: "transparent",
    },

    textcustomnote: {
        color: 'gray',
        fontSize: 13,
        fontFamily: 'Lato-Regular'
    },
    textJSONLD: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontFamily: 'PingFangSC-Regular',
        color: '#586b92'
    },

    jsonldheader: {
        color: '#000',
        fontSize: 13,
        fontFamily: 'Lato-Regular'
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    cardType: {
        borderRadius: 10,
    },

    cardType1: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    cardItem1: {
        borderLeftWidth: 3,
        borderLeftColor: '#759bfa',
        borderTopColor: '#e5eced',
        borderRightColor: '#e5eced',
        borderBottomColor: '#e5eced',
    }
});