import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import React from "react";
import { Image, TouchableOpacity, View, ToastAndroid } from "react-native";
import { Icon } from 'react-native-elements';

import home from '../screens/home';
import TO from '../screens/TO';
import AddScreen from '../screens/addScreen';
import jsonLD from '../screens/jsonld';
import graphone from '../screens/graph1';
import graphtwo from '../screens/graph2';
import AddScreen1 from '../screens/addScreen1';
import CreateNew2 from '../screens/createNew2';
import CreateNew3 from '../screens/createNew3';
import CreateNew4 from '../screens/createNew4';

import { Platform, Dimensions } from 'react-native'
import CustomDrawer from '../components/customDrawer';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: CustomDrawer
}
const DrawerNavigator = createDrawerNavigator(
    {
        home: {
            screen: home,
        },
    },
    DrawerConfig
);

const AppNavigator = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => ({
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
        })
    },
    TO: { screen: TO },
    AddScreen: { screen: AddScreen },
    jsonLD: { screen: jsonLD },
    graphone: { screen: graphone },
    graphtwo: { screen: graphtwo },
    AddScreen1: { screen: AddScreen1 },
    CreateNew2: { screen: CreateNew2 },
    CreateNew3: { screen: CreateNew3 },
    CreateNew4: { screen: CreateNew4 },
},
    {
        initialRouteName: 'DrawerNavigator',
    },
);

const App = createAppContainer(AppNavigator);

export default App;