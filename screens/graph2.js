import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { Icon, Button } from 'react-native-elements';
var { width } = Dimensions.get('window');
import { Card, CardItem, Header, Content, Container } from "native-base";
import Tablingrad from '../Tablingrad';

export default class hello extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'TO: 1234098765345432',
        headerStyle: {
            backgroundColor: '#f8f9fd',
            elevation: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontFamily: 'Avenir-Book',
            fontSize: 18,
        },
    };
    render() {
        return (
            <Container style={{ backgroundColor: '#f8f9fd' }}>
                <Header style={{ backgroundColor: '#f8f9fd' }}>
                    <Content>
                        <Tablingrad />
                    </Content>
                </Header>
                <View style={{ width: 335, alignSelf: 'center' }}>
                    <Card noShadow>
                        <CardItem>
                            <Image style={{ height: 300, width: 300 }} source={{ uri: 'https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180109030108/neo4j-bitcoin.png' }} />
                        </CardItem>
                    </Card>
                </View>
                <Text>{'\n\n\n\n\n\n'}</Text>
                <View style={{ width: 309, alignSelf: 'center' }}>
                    <Button title='CONFIRM' onPress={() => {
                        this.props.navigation.navigate('home')
                    }}></Button>
                    <Text />
                </View>
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
    },
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
});






