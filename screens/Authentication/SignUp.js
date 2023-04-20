import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	NativeModules,
	Dimensions,
	ScrollView,

} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// import { Checkbox } from 'react-native-material-ui'

import { AuthLayout } from '../';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, TextIconButton } from '../../components'
import { utils } from '../../utils';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from "react-native";
import { language } from '../Language/Launguage';
import { dummyData } from '../../constants';

var location,vendorName;
const SignUp = ({ navigation }) => {
	const [name, setName] = React.useState('')
	const [laundryName, setLaundryName] = React.useState('')
	const [laundryNameError, setLaundryNameError] = React.useState('')
	function isEnableSignUp() {
		// return email != '' && name != '' && laundryName!='' && emailError == '' && nameError == '' && laundryNameError == '' 
		// && latitude != 0 && longitude != 0
		return true
	}

	const [latitude, setLatitude] = React.useState(0);
	const [longitude, setLongitude] = React.useState(0);
	const [address, setAddress] = React.useState('Press Get Location')

	const requestLocationPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: "ABC",
					message: "ABC",
					buttonNegative: "Deny",
					buttonPositive: "Allow",
					buttonNeutral: "Ask Me Later"
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("OK");
				Geolocation.getCurrentPosition(
					(position) => {
						console.log(position);
						setLatitude(position.coords.latitude);
						setLongitude(position.coords.longitude);
						setTimeout(() => {
							fetch('http://api.positionstack.com/v1/reverse?access_key=fa41560aa421fedc10701fc6bb404c13&query=' + latitude + ',' + longitude)
								.then((response) => response.json())
								.then((json) => {
									var str = json.data[0].label;
									console.log(str);
									setAddress(str);
								})
								.catch((error) => {
									console.error(error);
								});
						}, 1000);
					},
					(error) => {
						// See error code charts below.
						console.log(error.code, error.message);
					},
					{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
				);
			} else {
				console.log("Denied");
			}
		} catch (err) {
			console.warn(err);
		}
	}

	return (

		<AuthLayout
			title={language == "E" ? "Welcome to LaundroMate Vendor" : "LaundroMate वेंडर में आपका स्वागत है"}
			subtitle={language == "E" ? "Let's create your account!" : "आइए आपका अकाउंट बनाएं"}
			titleContainerStyle={{
				marginTop: SIZES.radius
			}}
		>
			{/*Form Input And Sign UP */}
			<View
				style={{
					flex: 1,
					marginTop: SIZES.padding,
				}}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<FormInput
						label={language == "E" ? "Name" : "आपका नाम"}
						onChange={(value) => {
							setName(value)
							vendorName=value;
						}}
					/>
					<FormInput
						label={language == "E" ? "Shop Name" : "आपकी दुकान का नाम"}
						containerStyle={{
							marginTop: SIZES.radius
						}}
						onChange={(value) => {
							setLaundryName(value)
						}}
					/>

					<TouchableOpacity
						style={{
							marginTop: SIZES.padding + 5,
							height: 180,
							display: 'flex',
							borderRadius: SIZES.radius,
							overflow: 'hidden'
						}}
					>
						<Image
							source={dummyData.userMap}
							style={{
								flex: 1,
								height: '100%',
								width: '100%'
							}}
						/>
					</TouchableOpacity>
				</ScrollView>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: SIZES.padding,
					}}
				>
					<Text
						style={{
							color: COLORS.gray,
							...FONTS.body4,
							flex: 4
						}}
					>
						Location: <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>{latitude}, {longitude}</Text>{'\n'}{address}
					</Text>
					<TextButton
						label="Get Location"
						onPress={requestLocationPermission}
						buttonContainerStyle={{
							alignItems: 'center',
							backgroundColor: COLORS.transparent,
							flex: 2
						}}
						labelStyle={{
							color: COLORS.primary,
						}}
					/>
				</View>

				<TextButton
					label="Sign Up"
					disabled={isEnableSignUp() ? false : true}
					buttonContainerStyle={{
						height: 55,
						alignItems: 'center',
						marginTop: SIZES.padding,
						borderRadius: SIZES.radius,
						backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary
					}}
					onPress={() => {
						navigation.navigate("VendorServices");
						location = address;
					}}
				/>
			</View>
		</AuthLayout>
	)

}
export { location,vendorName };
export default SignUp;