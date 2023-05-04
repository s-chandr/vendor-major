import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashScreen from 'react-native-splash-screen';
import {
	OnBoarding,
	OrderDetail,
	Otp,
	SignUp
} from './screens';
import Language from "./screens/Language/Launguage";
import CustomDrawer from "./navigation/CustomDrawer";
import Orders from "./screens/Orders/Orders";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import PhoneNumber from "./screens/Authentication/PhoneNumber";
import VendorServices from "./screens/VendorServices/VendorServices";
import rootReducer from "./stores/rootReducer";

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
					initialRouteName={"Language"}
				>
					<Stack.Screen
						name="Home"
						component={CustomDrawer}
					/>
					<Stack.Screen
						name="Language"
						component={Language}
					/>
					<Stack.Screen
						name="OnBoarding"
						component={OnBoarding}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
					/>
					<Stack.Screen
						name="VendorServices"
						component={VendorServices}
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
						name="Orders"
						component={Orders}
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