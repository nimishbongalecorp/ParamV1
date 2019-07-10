import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import home from './home';
import TO from './screens/TO';
import AddScreen from './screens/AddScreen';

const AppNavigator = createStackNavigator({
    home: { screen: home },
    TO: { screen: TO },
    AddScreen: { screen: AddScreen },
},
    {
        initialRouteName: 'home',
    },
);

const App = createAppContainer(AppNavigator);

export default App;