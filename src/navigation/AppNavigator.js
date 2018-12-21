import React from 'react'; 
import { createSwitchNavigator } from 'react-navigation';
import { View, Text } from 'react-native';

class ScreenComponentOne extends React.Component {
  render() {
    return ( 
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 50 }}>Welcome to React-Native 0.57.0 bolerplate</Text>
      </View>
    );
  }
}
  

const PrimaryNav = createSwitchNavigator({
    routeNameOne: ScreenComponentOne,
  });

export default PrimaryNav;

