import React, { createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from 'react-native-splash-screen';

import {
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    MyCard,
    OrderDetail
} from './screens';

import CustomDrawer from "./navigation/CustomDrawer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import PhoneNumber from "./screens/Authentication/PhoneNumber";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={"OnBoarding"}
                >
                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />

                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                    />

                    <Stack.Screen
                        name="PhoneNumber"
                        component={PhoneNumber}
                    />

                    <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                    />

                     <Stack.Screen
                        name="OrderDetail"
                        component={OrderDetail}
                    />
                    
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
