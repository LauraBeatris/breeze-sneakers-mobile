import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // Giving a global access to reactotron
  console.tron = tron;

  // Clearing the timeline on each refresh
  tron.clear();
}
