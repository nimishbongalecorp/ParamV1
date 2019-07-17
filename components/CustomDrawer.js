import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Icon, Left } from 'native-base';
import { Image, StyleSheet } from 'react-native';
export default class CustomDrawer extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Container style={{ backgroundColor: '#ffffff', marginTop: 10 }}>
                <Content>
                    <ListItem style={styles.listitem}>
                        <Text style={styles.heading}>{'\n\n'}TVS Logistics{'\n'}
                            <Text style={styles.headnum}>1234567890123456</Text>
                        </Text>
                    </ListItem>
                    <ListItem />
                    <ListItem style={styles.listitem}>
                        <Left>
                            <Image style={styles.image} source={require('../assets/icon.png')}></Image>
                            <Text style={styles.innertext}>     Contracts</Text>
                        </Left>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Left>
                            <Image style={styles.image} source={require('../assets/icon1.png')}></Image>
                            <Text style={styles.innertext}>     Orders</Text>
                        </Left>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Left>
                            <Icon name='folder-open'></Icon>
                            <Text style={styles.innertext}>     Invoices</Text>
                        </Left>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Left>
                            <Image style={styles.image} source={require('../assets/icon2.png')}></Image>
                            <Text style={styles.innertext}>     Team</Text>
                        </Left>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Left>
                            <Image style={styles.image} source={require('../assets/icon3.png')}></Image>
                            <Text style={styles.innertext}>      e-LR</Text>
                        </Left>
                    </ListItem>
                    <ListItem style={styles.listitem}>
                        <Left>
                            <Image style={styles.image} source={require('../assets/icon4.png')}></Image>
                            <Text style={styles.innertext}>      Customers</Text>
                        </Left>
                    </ListItem>
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