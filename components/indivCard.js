import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
var { width } = Dimensions.get('window');
import { Card, CardItem, Right, Content, Left } from "native-base";
import { withNavigation } from 'react-navigation';

class hello2 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TO')}>
                <Card styles={{ elevation: 3 }}>
                    <Content>
                        <CardItem header style={styles.cardItem1}>
                            <Left>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.textPrimary}>{this.props.title}{'\n'}</Text>
                                    <Text style={styles.textSecondaryHeading}>1234567890123456 | 06-03-2019</Text>
                                </View>
                            </Left>
                            <Right>
                                <Text style={styles.textPrimary}>$25000.00</Text>
                            </Right>
                        </CardItem>
                    </Content>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(hello2)

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#f8f9fd',
        justifyContent: 'center',
    },

    Animated_View_Style:
    {
        height: 320,
        backgroundColor: '#f8f9fd',
        alignItems: 'center',
        justifyContent: 'center',
    },

    View_Inside_Text:
    {
        color: '#fff',
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
    textstyle2: {
        color: '#354052',
        fontFamily: 'Lato-Regular',
        fontSize: 30,
    },
    textinitial: {
        color: '#413962',
        fontFamily: 'Lato-Bold',
        fontSize: 17,
        fontWeight: 'bold'
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
    textPrimary: {
        fontSize: 14,
        color: '#222222',
        fontFamily: 'Avenir-Roman'
    },

    textRight: {
        fontSize: 14,
        color: '#222222',
        fontFamily: 'Avenir-Roman',
        textAlign: 'right',
    },
    textSecondaryHeading: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'left',
        backgroundColor: "transparent",
    },
    cardItem1: {
        borderLeftWidth: 3,
        borderLeftColor: '#759bfa',
        borderTopColor: '#e5eced',
        borderRightColor: '#e5eced',
        borderBottomColor: '#e5eced',
    },

    ScrollableTabView: {
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    addButton: {
        backgroundColor: '#FFBA3A',
        borderColor: '#FFBA3A',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 65,
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: 20,
        shadowOffset: {
            height: 1,
            width: 0,
        }
    },
});


