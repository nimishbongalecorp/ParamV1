import {
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import { Platform, Dimensions } from 'react-native'
import CustomDrawer from '../components/CustomDrawer';
import AppNavigator from './AppNavigator'


const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: CustomDrawer
}
const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: AppNavigator
        },

    },
    DrawerConfig
);
export default createAppContainer(DrawerNavigator);
