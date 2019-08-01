import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import CircleCard from './circleCard';

export default class TextInputInScrollView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presbut: 2,
        }
    }
    render() {
        switch (this.state.presbut) {
            case 0:
                return (
                    <Card noShadow>
                        <CircleCard option={1} to={0} />
                        <Divider />
                        <CircleCard option={2} to={1} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={2} to={2} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={2} to={3} setParentState={newState => this.setState(newState)} />
                    </Card>
                )
                break;
            case 1:
                return (
                    <Card noShadow>
                        <CircleCard option={2} to={0} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={1} to={1} />
                        <Divider />
                        <CircleCard option={2} to={2} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={2} to={3} setParentState={newState => this.setState(newState)} />
                    </Card>
                )
                break;
            case 2:
                return (
                    <Card noShadow>
                        <CircleCard option={2} to={0} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={2} to={1} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={1} to={2} />
                        <Divider />
                        <CircleCard option={2} to={3} setParentState={newState => this.setState(newState)} />
                    </Card>
                )
                break;
            case 3:
                return (
                    <Card noShadow>
                        <CircleCard option={2} to={0} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={2} to={1} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={2} to={2} setParentState={newState => this.setState(newState)} />
                        <Divider />
                        <CircleCard option={1} to={3} />
                    </Card>
                )
                break;
        }
    }
}

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
    text1: {
        color: '#878787',
        fontFamily: 'Avenir-Heavy',
        fontSize: 17,
        fontWeight: 'bold'
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
})

