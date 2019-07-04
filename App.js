import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'mobx-react';
import store from "./src/store";
import AppNavigator from "./setup";
import {glS} from "./src/styles";

export default function App () {
    return (
        <Provider store={store}>
            <SafeAreaView style={ glS.sAV }>
                <StatusBar barStyle="light-content"/>
                <AppNavigator/>
            </SafeAreaView>
        </Provider>
    )
}