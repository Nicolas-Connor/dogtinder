import Menu from './Menu'
import App from './App'

import {
  AppRegistry
} from 'react-native'
// const SampleApp = createStackNavigator({
//   Home:{screen:App},
//   Menu:{screen: Menu}
// });
AppRegistry.registerComponent('Exemple', () => App)
// const Apps = createAppContainer(SampleApp);

// export default Apps;