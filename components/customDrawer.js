import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Icon, Left } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import DrawerCardItem from './drawerCardItem';
export default class CustomDrawer extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

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

        const data = [
            {
                title: 'Contracts',
                path: require('../assets/icon.png')

            },
            {
                title: 'Orders',
                path: require('../assets/icon1.png')

            },
            {
                title: 'Invoices',
                path: require('../assets/icon2.png')

            },
            {
                title: 'Team',
                path: require('../assets/icon1.png')

            },
            {
                title: 'e-LR',
                path: require('../assets/icon4.png')

            },
            {
                title: 'Customers',
                path: require('../assets/icon4.png')

            },
        ]
        return (
            <Container style={{ backgroundColor: '#ffffff', marginTop: 10 }}>
                <Content>
                    <ListItem style={styles.listitem}>
                        <Text style={styles.heading}>{'\n\n'}TVS Logistics{'\n'}
                            <Text style={styles.headnum}>1234567890123456</Text>
                        </Text>
                    </ListItem>
                    <ListItem />
                    {data.map((item, key) => (
                        <DrawerCardItem key={key} name={item} />
                    ))}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textheading: {
        fontFamily: 'Avenir-Book',
        fontSize: 20
    },
    headnum: {
        fontFamily: 'Avenir-Book',
        fontSize: 14,
        color: '#747575'
    },

    image: {
        width: 16,
        height: 16
    },

    innertext: {
        color: '#5b5b5b',
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },

    listitem: {
        borderBottomWidth: 0
    }

})