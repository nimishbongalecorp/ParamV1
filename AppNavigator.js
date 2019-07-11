import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import home from './home';
import TO from './screens/TO';
import AddScreen from './screens/AddScreen';
import jsonLD from './screens/jsonld';
import graphone from './screens/graph1';
import graphtwo from './screens/graph2';

const AppNavigator = createStackNavigator({
    home: { screen: home },
    TO: { screen: TO },
    AddScreen: { screen: AddScreen },
    jsonLD: { screen: jsonLD },
    graphone: { screen: graphone },
    graphtwo: { screen: graphtwo }
},
    {
        initialRouteName: 'home',
    },
);

const App = createAppContainer(AppNavigator);

export default App;