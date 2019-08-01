import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Icon, Left } from 'native-base';
import { Image, StyleSheet } from 'react-native';
export default class CustomDrawerComp extends Component {

    render() {
        return (
            <ListItem style={styles.listitem}>
                <Left>
                    <Image style={styles.image}
                        source={this.props.name.path}></Image>
                    <Text style={styles.innertext}>          {this.props.name.title}</Text>
                </Left>
            </ListItem>
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