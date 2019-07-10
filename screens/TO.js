import React from "react";
import { AppRegistry, View, Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Icon, Button } from 'react-native-elements';
var { width } = Dimensions.get('window');
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { CardItem, Card } from "native-base";

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
            <ScrollableTabView
                style={{ marginBottom: 5, }}
                initialPage={0}
                tabBarUnderlineStyle={{ backgroundColor: '#6c5cff' }}
                tabBarActiveTextColor={'#6c5cff'}
                tabBarInactiveTextColor={'#000'}
                tabBarBackgroundColor={'#f8f9fd'}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <View tabLabel='Menu' style={{ backgroundColor: '#f8f9fd' }}>
                    <ScrollView>
                        <View style={{ width: 335, alignSelf: 'center' }}>
                            <Card noShadow>
                                <CardItem>
                                    <Text style={styles.text1}>
                                        {'\n'}STARK INDUSTRIES{'\n'}
                                        <Text style={styles.text2}>
                                            Quotation #27282928292829</Text>
                                    </Text>

                                </CardItem>
                                <CardItem>
                                    <Text style={styles.text3}>
                                        Quotation type: <Text style={{ color: '#0091ff' }}>Private  </Text>
                                    </Text>
                                    <Icon type='font-awesome' name='lock' color='#0091ff' iconStyle={{ width: 15, height: 20 }}>
                                    </Icon>

                                </CardItem>
                                <Text style={styles.text3}>      06-03-2019</Text>
                                <CardItem>
                                    <Text style={styles.text}>
                                        Subscribers
                                 </Text>
                                    <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: '#0091ff' }}>                                            +Add More</Text>
                                </CardItem>
                                <CardItem>
                                    <Text style={styles.text2}>
                                        Wayne Corporations{'\n'}
                                        Stark Industries{'\n'}
                                    </Text>
                                </CardItem>
                            </Card>
                            <Card noShadow>
                                <CardItem>
                                    <Text style={styles.text1}>
                                        ITEMS(03){'\n\n'}
                                        <Text style={styles.textpanel}>
                                            Panel cyx with dimension 1/4            $10000{'\n'}

                                            <Text style={styles.innertext}>
                                                {'\n'}Type:Goods{'\n'}
                                                Unit Price:$1000{'\n'}
                                                Quantity:10{'\n'}
                                            </Text>
                                            <Text style={{ color: '#e5eced' }}>    ______________________________________________</Text></Text>
                                    </Text>
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
                                    <Text style={styles.textpanel}>                               Sub Total           $30000.00{'\n'}                              - - - - - - - - - - - - - - - - - - - - - - - -{'\n'}                               Round Off          $30000.00{'\n\n'}                               Total                    $30000.00{'\n'}
                                    </Text>
                                </CardItem>
                            </Card>
                            <Card noShadow>
                                <CardItem>
                                    <Text style={styles.textcustomnote}>
                                        Custom Note{'\n\n'}
                                        Approved for the welfare of Gotham City
                                     </Text>
                                </CardItem>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
                <View tabLabel='Graph 1' style={{ backgroundColor: '#f8f9fd' }}>
                    <View style={{ width: 335, alignSelf: 'center' }}>
                        <CardItem>
                            <Image style={{ height: 300, width: 300 }} source={{ uri: 'https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180109030108/neo4j-bitcoin.png' }} />
                        </CardItem>
                        <Text>{'\n\n\n\n\n\n\n'}</Text>
                        <View style={{ width: 309, alignSelf: 'center' }}>
                            <Button title='CONFIRM'></Button>
                        </View>
                    </View>
                </View>
                <View tabLabel='jsonLD' style={{ backgroundColor: '#f8f9fd' }}>
                    <View style={{ width: 335, alignSelf: 'center' }}>
                        <Card noShadow>
                            <CardItem>
                                <Text style={styles.jsonldheader}>jsonLd{'\n\n'}
                                    <Text style={styles.textJSONLD}>
                                        {'\{\n'}
                                        "@context": "https://json-ld.org/contexts/person.jsonld",{'\n'}
                                        "@id": "http://dbpedia.org/resource/John_Lennon",{'\n'}
                                        "name": "John Lennon",{'\n'}
                                        "born": "1940-10-09",{'\n'}
                                        "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
                        {'\n\}'}
                                    </Text></Text>
                            </CardItem>
                        </Card>
                        <Text>{'\n\n\n\n\n\n\n\n\n\n\n\n'}</Text>
                        <View style={{ width: 309, alignSelf: 'center' }}>
                            <Button title='CONFIRM'></Button>
                        </View>
                    </View>
                </View>
                <View tabLabel='Graph 2' style={{ backgroundColor: '#f8f9fd' }}>
                    <View style={{ width: 335, alignSelf: 'center' }}>
                        <CardItem>
                            <Image style={{ height: 300, width: 300 }} source={{ uri: 'https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180109030108/neo4j-bitcoin.png' }} />
                        </CardItem>
                        <Text>{'\n\n\n\n\n\n\n'}</Text>
                        <View style={{ width: 309, alignSelf: 'center' }}>
                            <Button title='CONFIRM'></Button>
                        </View>
                    </View>
                </View>
            </ScrollableTabView>

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





