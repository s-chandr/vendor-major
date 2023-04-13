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

var location;
const SignUp = ({ navigation }) => {
	const [email, setEmail] = React.useState('')
	const [name, setName] = React.useState('')
	const [laundryName, setLaundryName] = React.useState('')
	const [emailError, setEmailError] = React.useState('')
	const [nameError, setNameError] = React.useState('')
	const [laundryNameError, setLaundryNameError] = React.useState('')
	function isEnableSignUp() {
		// return email != '' && name != '' && laundryName!='' && emailError == '' && nameError == '' && laundryNameError == '' 
		// && latitude != 0 && longitude != 0
		return true
	}

	const [latitude, setLatitude] = React.useState(0);
	const [longitude, setLongitude] = React.useState(0);
	const [address, setAddress] = React.useState('Press Get Location')

	const [toggleCheckBox1, setToggleCheckBox1] = React.useState(false)

	const [toggleCheckBox2, setToggleCheckBox2] = React.useState(false)
	const [toggleCheckBox3, setToggleCheckBox3] = React.useState(false)
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
			title="Welcome to LaundroMate"
			subtitle="Let's create your account!"
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
				<FormInput
					label="Name"
					onChange={(value) => {
						setName(value)
					}}
				/>
				<FormInput
					label="Shop Name"
					onChange={(value) => {
						setLaundryName(value)
					}}
				/>
				<FormInput
					label="Email"
					containerStyle={{
						marginTop: SIZES.radius
					}}
					keyboardType="email-address"
					autoCompleteType="email"
					onChange={(value) => {
						// validate email I
						utils.validateEmail(value, setEmailError)
						setEmail(value)
					}}
					errorMsg={emailError}
					appendComponent={
						<View
							style={{
								justifyContent: 'center'
							}}
						>
							<Image
								source={email == '' || (email != '' && emailError == '') ? icons.correct : icons.cancel}
								style={{
									height: 20,
									width: 20,
									tintColor: email == '' ? COLORS.gray : (email != '' && emailError == '') ? COLORS.green : COLORS.red
								}}
							/>
						</View>
					}
				/>
				
				
				<View 
					style={{
						display: 'flex',
						flexDirection: 'row',
						
						alignItems: 'center',
						marginTop: SIZES.padding,
					}}
				>
					<CheckBox
					
					disabled={false}
					value={toggleCheckBox1}
					onValueChange={(newValue) => setToggleCheckBox1(newValue)}
					></CheckBox>
					<Text>Roll Press</Text>

					
				</View>
				<View 
					style={{
						display: 'flex',
						flexDirection: 'row',
						
						alignItems: 'center',
						marginTop: SIZES.padding,
					}}
				>
					<CheckBox
					
					disabled={false}
					value={toggleCheckBox2}
					onValueChange={(newValue) => setToggleCheckBox2(newValue)}
					></CheckBox>
					<Text>Dry Clean</Text>

					
				</View>
				<View 
					style={{
						display: 'flex',
						flexDirection: 'row',
						
						alignItems: 'center',
						marginTop: SIZES.padding,
					}}
				>
					<CheckBox
					
					disabled={false}
					value={toggleCheckBox3}
					onValueChange={(newValue) => setToggleCheckBox3(newValue)}
					></CheckBox>
					<Text>Press</Text>

					
				</View>
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
				
				{/* Sign up amd Sign In */}
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
						navigation.navigate("Home");
						location = address;
					}}
				/>
			</View>
		</AuthLayout>
	)

}
export { location };
export default SignUp;