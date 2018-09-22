import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store';

export const store = configureStore();

class App extends React.Component {
    render() {
        return ( 
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
            <Provider store={store}>
                 <View><Text style={{ fontSize: 50 }}>Welcome to React-Native 0.57.0 bolerplate</Text></View>
            </Provider>
        </SafeAreaView>
        );
    }
}
export default App;

