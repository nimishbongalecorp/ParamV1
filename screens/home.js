import React from "react";
import { AppRegistry, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ToastAndroid, ScrollView } from "react-native";
import { Icon } from 'react-native-elements';
var { width } = Dimensions.get('window');
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Card, CardItem } from "native-base";
import { FloatingAction } from 'react-native-floating-action';
import Drawer from 'react-native-drawer';
import DrawerActions from 'react-navigation';

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
                style={{ marginTop: 5 }}
                initialPage={0}
                tabBarUnderlineStyle={{ backgroundColor: '#6c5cff' }}
                tabBarActiveTextColor={'#4a4a4a'}
                tabBarInactiveTextColor={'#3b3b3b'}
                renderTabBar={() => <ScrollableTabBar />
                }
            >

                <View tabLabel='QUOTATIONS' style={{ backgroundColor: '#f8f9fd' }}>
                    <ScrollView>
                        <View>
                            <Text style={styles.textinitial}>
                                {'\n\n'}    QUOTATIONS  <Image style={{ width: 14.2, height: 10.2 }} source={require('../assets/launch_arrow.png')} />
                            </Text>
                            <Text styles={styles.textstyle2}>     Last synced 28 Feb, 02:09{'\n'}</Text>
                        </View>
                        <View style={{ width: 335, alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TO')}>
                                <Card noShadow>
                                    <CardItem header style={styles.cardItem1}>
                                        <Text style={styles.textPrimary}>Korea Retail 1                                         $25000.00{'\n\n'}
                                            <Text style={styles.textSecondaryHeading}>1234567890123456 | 06-03-2019</Text>
                                        </Text>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <Card noShadow>
                                <CardItem header style={styles.cardItem1}>
                                    <Text style={styles.textPrimary}>Stark Industries                                      $25000.00{'\n\n'}
                                        <Text style={styles.textSecondaryHeading}>1234567890123456 | 06-03-2019</Text>
                                    </Text>
                                </CardItem>
                            </Card>
                            <Card noShadow>
                                <CardItem header style={styles.cardItem1}>
                                    <Text style={styles.textPrimary}>India Distributor                                      $25000.00{'\n\n'}

                                        <Text style={styles.textSecondaryHeading}>1234567890123456 | 06-03-2019</Text>
                                    </Text>
                                </CardItem>
                            </Card>

                            <Card noShadow>
                                <CardItem header style={styles.cardItem1}>
                                    <Text style={styles.textPrimary}>Korea Retail 2                                         $25000.00{'\n\n'}

                                        <Text style={styles.textSecondaryHeading}>1234567890123456 | 06-03-2019</Text>
                                    </Text>
                                </CardItem>
                            </Card>

                            <Card noShadow>
                                <CardItem header style={styles.cardItem1}>
                                    <Text style={styles.textPrimary}>India Distributor                                      $25000.00{'\n\n'}

                                        <Text style={styles.textSecondaryHeading}>1234567890123456 | 06-03-2019</Text>
                                    </Text>
                                </CardItem>
                            </Card>
                        </View>
                    </ScrollView>
                    <FloatingAction color='#FFBA39'
                        onOpen={() => this.props.navigation.navigate('AddScreen')} />
                </View>
                <View tabLabel='PO' ></View>
                <View tabLabel='INVOICE'></View>
            </ScrollableTabView>
        );
    }
}

AppRegistry.registerComponent(
    'Day3App',
    () => hello());

const styles = StyleSheet.create({
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
    }

});






