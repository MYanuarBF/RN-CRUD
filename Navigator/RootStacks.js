import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Homescreen from '../Screen/Homescreen.js';
import Addscreen from '../Screen/Addscreen.js';
import Editscreen from '../Screen/Editscreen';

const RootStack = createStackNavigator(
  {
    Home: Homescreen,
    Add: Addscreen,
    Edit: Editscreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1e88e5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
const App = createAppContainer(RootStack);
export default App;
