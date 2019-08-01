import React from "react";
import { AppRegistry, View, Text, StyleSheet, Dimensions, ToastAndroid } from "react-native";
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');
import { CardItem, Card, Container, Content, Header, Right, Left } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presbut: 1
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

    render() {

        return (
            <Container style={{ backgroundColor: '#F2F4FF' }}>
                <Header style={{ backgroundColor: '#F2F4FF' }}>
                    <Content>
                        <Text style={{ fontFamily: 'Lato-Bold', fontWeight: 'bold', fontSize: 16 }}>{'\n'}   PRINT PREVIEW</Text>
                    </Content>
                </Header>
                <Content>
                    <View style={{ backgroundColor: '#F2F4FF' }}>
                        <View style={{ marginLeft: 12, marginRight: 12, alignSelf: 'center' }}>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Text style={styles.text1}>
                                        {'\n'}INVOICE{'\n'}
                                        <Text style={styles.text2}>
                                            Param ID # A00101</Text>
                                    </Text>
                                </CardItem>
                                <CardItem>
                                    <Text style={styles.text2}>From{'\n'}<Text style={{ color: '#000' }}>
                                        Divum Corporate Services{'\n'}1234567890123456</Text> </Text>
                                </CardItem>

                                <CardItem>
                                    <Text style={styles.text2}>To{'\n'}<Text style={{ color: '#000' }}>
                                        Stark Industries{'\n'}1234567890123456{'\n'}Order Date: 06-04-2019{'\n'}Terms of
                                        Payment: 30 days{'\n'}</Text> </Text>
                                </CardItem>
                                <CardItem style={{ backgroundColor: '#2a2a2a', flexDirection: 'row', borderLeftWidth: 12, borderRightWidth: 12, borderColor: '#fff' }}>
                                    <Left>
                                        <Text style={{ color: '#fff' }}>Items</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ color: '#fff' }}>Amount</Text>
                                    </Right>
                                </CardItem>

                                <CardItem>
                                    <Text style={styles.textpanel}>
                                        Panel cyx with dimension 1/4            $10000{'\n'}
                                        <Text style={styles.innertext}>
                                            {'\n'}Type:Goods{'\n'}
                                            Unit Price:$1000{'\n'}
                                            Quantity:10{'\n'}
                                        </Text>
                                        <Text style={{ color: '#e5eced' }}>    ______________________________________________</Text></Text>
                                </CardItem>

                                <CardItem>
                                    <Text style={styles.textpanel}>
                                        Panel cyx with dimension 1/4            $10000{'\n'}
                                        <Text style={styles.innertext}>
                                            {'\n'}Type:Goods{'\n'}
                                            Unit Price:$1000{'\n'}
                                            Quantity:10{'\n'}
                                        </Text>
                                        <Text style={{ color: '#e5eced' }}>    ______________________________________________</Text></Text>
                                </CardItem>

                                <CardItem>
                                    <Left />
                                    <Right>
                                        <Text>Sub Total           180  </Text>
                                        <Text>Tax              20  </Text>
                                        <View style={{ backgroundColor: '#dddddd' }}>
                                            <Text>           Total           200  </Text>
                                        </View>
                                    </Right>
                                </CardItem>
                                <CardItem>
                                    <Text style={styles.text2}>
                                        Note{'\n\n'}<Text style={{ color: '#000' }}>
                                            Thanks for your business</Text></Text>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.buttoncontainer}>
                            <Button color={'#3b7cec'} title='SAVE AS DRAFT' onPress={() => ToastAndroid.show('Saving as Draft...', ToastAndroid.SHORT)}></Button>
                            <Button color={'#3b7cec'} title='SAVE AND SEND' onPress={() => {
                                this.props.navigation.navigate('home');
                                ToastAndroid.show('Saving and Sending...', ToastAndroid.SHORT)
                            }}></Button>
                        </View>
                    </View >
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent(
    'Day3App',
    () => TO());

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
        fontSize: 18,
        color: '#222222',
        fontWeight: 'bold',
    },

    text2: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: 'gray',
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
    buttoncontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
        paddingBottom: 15
    },
});






