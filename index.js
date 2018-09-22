/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (process.env.NODE_ENV === 'development') {
    const _XHR = GLOBAL.originalXMLHttpRequest 
    ? GLOBAL.originalXMLHttpRequest 
    : GLOBAL.XMLHttpRequest;   
    global.FormData = global.originalFormData 
    ? global.originalFormData 
    : global.FormData;                  
	XMLHttpRequest = _XHR;
}

export default App;
