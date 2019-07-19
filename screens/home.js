import React from "react";
import { AppRegistry, View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight, Image, ToastAndroid, ScrollView } from "react-native";
import { Icon } from 'react-native-elements';
var { width } = Dimensions.get('window');
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Card, CardItem, Right, Content, Left, Header, Container } from "native-base";

export default class hello extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize: 22,
        },


        headerTitle: (
            <Image style={{ width: 32, height: 32 }} source={require('../assets/group_4.png')} />
        ),

        headerRight: (
            <TouchableOpacity onPress={() => ToastAndroid.show('Notification', ToastAndroid.SHORT)}>
                <View style={{ paddingRight: 24 }}>
                    <Image
                        style={{ width: 20, height: 22, overlayColor: 'black' }} source={require('../assets/bell.png')}>
                    </Image>
                </View>
            </TouchableOpacity>
        ),

        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingLeft: 19 }}>
                    <Icon name='menu'
                        color='#0091ff' style={{ width: 18, height: 12 }}>
                    </Icon>
                </View>
            </TouchableOpacity>
        ),
    });

    render() {
        return (
            <ScrollableTabView
                style={styles.ScrollableTabView}
                initialPage={0}
                tabBarUnderlineStyle={{ backgroundColor: '#6c5cff' }}
                tabBarActiveTextColor={'#4a4a4a'}
                tabBarInactiveTextColor={'#3b3b3b'}
                renderTabBar={() => <ScrollableTabBar />
                }
            >

                <View tabLabel='QUOTATIONS' style={{ flex: 1 }}>
                    <Container style={{ backgroundColor: '#f8f9fd' }} >
                        <Content>
                            <View>
                                <Text style={styles.textinitial}>
                                    {'\n\n'}    QUOTATIONS  <Image style={{ width: 14.2, height: 10.2 }} source={require('../assets/launch_arrow.png')} />
                                </Text>
                                <Text styles={styles.textstyle2}>     Last synced 28 Feb, 02:09{'\n'}</Text>
                            </View>
                            <View style={{ marginLeft: 13, marginRight: 12 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TO')}>
                                    <Card styles={{ elevation: 3 }}>
                                        <Content>
                                            <CardItem header style={styles.cardItem1}>
                                                <Left>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={styles.textPrimary}>Korea Retail 1{'\n'}</Text>
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
                                <TouchableOpacity>
                                    <Card styles={{ elevation: 3 }}>
                                        <Content>
                                            <CardItem header style={styles.cardItem1}>
                                                <Left>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={styles.textPrimary}>Stark Industries{'\n'}</Text>
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
                                <TouchableOpacity>
                                    <Card styles={{ elevation: 3 }}>
                                        <Content>
                                            <CardItem header style={styles.cardItem1}>
                                                <Left>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={styles.textPrimary}>India Distributor{'\n'}</Text>
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

                                <TouchableOpacity>
                                    <Card styles={{ elevation: 3 }}>
                                        <Content>
                                            <CardItem header style={styles.cardItem1}>
                                                <Left>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={styles.textPrimary}>Korea Retail 2{'\n'}</Text>
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
                                <TouchableOpacity>
                                    <Card styles={{ elevation: 3 }}>
                                        <Content>
                                            <CardItem header style={styles.cardItem1}>
                                                <Left>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={styles.textPrimary}>India Distributor{'\n'}</Text>
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
                            </View>
                        </Content>
                    </Container>
                    <TouchableHighlight style={styles.addButton}
                        underlayColor='#FFBA3A' onPress={() => { this.props.navigation.navigate('AddScreen') }}>
                        <Text style={{ fontSize: 38, color: 'white', fontFamily: 'Avenir-Heavy' }}>+</Text>
                    </TouchableHighlight>
                </View>
                <View tabLabel='PO'></View>
                <View tabLabel='INVOICE'></View>
            </ScrollableTabView>
        );
    }
}

AppRegistry.registerComponent(
    'Day3App',
    () => hello());

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






