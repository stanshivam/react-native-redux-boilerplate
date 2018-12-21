import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import ReduxNavigator from './src/navigation/ReduxNavigator';


export const store = configureStore();

class App extends React.Component {
    render() {
        return ( 
            <Provider store={store}>
                 <ReduxNavigator />
            </Provider>
        );
    }
}
export default App;

// command to to create bundle before assembleDebug
// react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

