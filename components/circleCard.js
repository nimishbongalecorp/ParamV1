import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardItem, Left, Right } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

class compie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            'Stark Industries',
            'Korea Retail',
            'ABC Corporation',
            'India Retail'
        ]

        switch (this.props.option) {
            case 1:
                return (
                    <TouchableHighlight>
                        <CardItem>
                            <Left><Text style={{ color: '#000' }}>{data[this.props.to]}{'\n\n'}<Text style={{ color: 'gray' }}>1234567890123456</Text></Text></Left>
                            <Right><Icon name="check-circle" type="font-awesome" size={27} color="blue"></Icon></Right>
                        </CardItem>
                    </TouchableHighlight>
                )
                break
            default:
                return (
                    <TouchableHighlight onPress={() => {
                        this.props.setParentState({ presbut: this.props.to })
                    }}>
                        <CardItem>
                            <Left><Text style={{ color: '#000' }}>{data[this.props.to]}{'\n\n'}<Text style={{ color: 'gray' }}>1234567890123456</Text></Text></Left>
                            <Right><View style={styles.circlething}></View></Right>
                        </CardItem>
                    </TouchableHighlight>)
        }
    }
}

export default withNavigation(compie)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    safe: {
        flex: 1,
        backgroundColor: '#F2F4FF',
    },

    circlething: {
        height: 25,
        width: 25,
        borderBottomLeftRadius: 12.5,
        borderBottomRightRadius: 12.5,
        borderTopLeftRadius: 12.5,
        borderTopRightRadius: 12.5,
        borderColor: '#B2B2B2',
        borderWidth: 1
    },
})