import Reactotron from 'reactotron-react-native';
import { IP_ADDRESS } from 'react-native-dotenv';

/*
 DEV -> Global variable of React Native that returns a boolean value if the user
 is running the app locally
*/
if (__DEV__) {
    const tron = Reactotron.configure()
        .useReactNative() // add all built-in react native plugins
        .connect({ host: IP_ADDRESS }); // let's connect!

    // console -> Global variable -> To give a global access to reactotron
    console.tron = tron;

    // Clearing the timeline on each refresh
    tron.clear();
}
