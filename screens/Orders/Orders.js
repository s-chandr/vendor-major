import React from 'react';
import {
	View,
	Text,
	ScrollView,
	Image
} from 'react-native';

import { Header, IconButton, TextButton, CardItem, CartQuantityButton } from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
// import { language } from '../Language/Launguage';
var language = "E"

var order;
const Orders = ({ navigation }) => {

	function renderHeader() {
		return (
			<Header
				title="Orders Recieved"
				containerStyle={{
					marginTop: 40,
					marginBottom: 30
				}}
				leftComponent={
					<IconButton
						icon={icons.back}
						containerStyle={{
							width: 40,
							height: 40,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: SIZES.radius,
							borderWidth: 1,
							borderColor: COLORS.gray2
						}}
						iconStyle={{
							width: 20,
							height: 20,
							tintColor: COLORS.gray2
						}}
						onPress={() => navigation.goBack()}
					/>
				}
				rightComponent={
					<View
						style={{
							width: 40
						}}
					/>

				}

			/>
		)
	}

	function renderOrders() {
		return (
			<View>
				<Text style={{ ...FONTS.h3, marginBottom: SIZES.padding }}>{language == "E" ? "New Orders" : "नए ऑर्डर्स"}</Text>
				<View
					style={{
						width: "100%",
						backgroundColor: COLORS.white,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray1,
						borderWidth: 1,
						marginBottom: SIZES.padding
					}}
				>
					{/* Upper Half */}
					<View
						style={{
							backgroundColor: COLORS.lightGray2,
							borderBottomWidth: 1,
							borderBottomColor: COLORS.lightGray1,
							borderTopLeftRadius: SIZES.radius,
							borderTopRightRadius: SIZES.radius,
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						{/* Left */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.primary,
									height: 40,
									width: 40,
									marginRight: SIZES.radius,
									borderRadius: SIZES.radius,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Image
									source={icons.cart}
									style={{
										height: 22,
										width: 22,
										tintColor: COLORS.white,
										marginTop: -2
									}}
								/>
							</View>
							<View>
								{language == "E" && <Text style={{ ...FONTS.h4 }}>Order from Harsh</Text>}
								{language == "H" && <Text style={{ ...FONTS.h4 }}>Harsh Parwal का आर्डर</Text>}
								<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order No." : "आर्डर न."} 14432</Text>
							</View>
						</View>

						{/* Right */}
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order Status" : "आर्डर स्टेटस"}</Text>
							<Image
								source={icons.right}
								style={{
									height: 8,
									width: 8,
									marginLeft: 3,
									tintColor: COLORS.primary
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* Lower Half */}
					<View
						style={{
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
						}}
					>
						<View
							style={{
								marginBottom: SIZES.radius * 1.3
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>1</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Dry Clean</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									// marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>2</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Curtain Cleaning</Text>
							</View>
						</View>
						<View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray1, marginBottom: SIZES.radius * 1.3 }}></View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>02 May 2023 at 01:50PM</Text>
							<Text style={{ ...FONTS.h5 }}>₹ 200</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						backgroundColor: COLORS.white,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray1,
						borderWidth: 1,
						marginBottom: SIZES.padding
					}}
				>
					{/* Upper Half */}
					<View
						style={{
							backgroundColor: COLORS.lightGray2,
							borderBottomWidth: 1,
							borderBottomColor: COLORS.lightGray1,
							borderTopLeftRadius: SIZES.radius,
							borderTopRightRadius: SIZES.radius,
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						{/* Left */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.primary,
									height: 40,
									width: 40,
									marginRight: SIZES.radius,
									borderRadius: SIZES.radius,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Image
									source={icons.cart}
									style={{
										height: 22,
										width: 22,
										tintColor: COLORS.white,
										marginTop: -2
									}}
								/>
							</View>
							<View>
								{language == "E" && <Text style={{ ...FONTS.h4 }}>Order from Harsh</Text>}
								{language == "H" && <Text style={{ ...FONTS.h4 }}>Harsh Parwal का आर्डर</Text>}
								<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order No." : "आर्डर न."} 14432</Text>
							</View>
						</View>

						{/* Right */}
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order Status" : "आर्डर स्टेटस"}</Text>
							<Image
								source={icons.right}
								style={{
									height: 8,
									width: 8,
									marginLeft: 3,
									tintColor: COLORS.primary
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* Lower Half */}
					<View
						style={{
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
						}}
					>
						<View
							style={{
								marginBottom: SIZES.radius * 1.3
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>1</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Dry Clean</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									// marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>2</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Curtain Cleaning</Text>
							</View>
						</View>
						<View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray1, marginBottom: SIZES.radius * 1.3 }}></View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>02 May 2023 at 01:50PM</Text>
							<Text style={{ ...FONTS.h5 }}>₹ 200</Text>
						</View>
					</View>
				</View>
				<Text style={{ ...FONTS.h3, marginBottom: SIZES.padding }}>{language == "E" ? "Past Orders" : "पुराने ऑर्डर्स"}</Text>
				<View
					style={{
						width: "100%",
						backgroundColor: COLORS.white,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray1,
						borderWidth: 1,
						marginBottom: SIZES.padding
					}}
				>
					{/* Upper Half */}
					<View
						style={{
							backgroundColor: COLORS.lightGray2,
							borderBottomWidth: 1,
							borderBottomColor: COLORS.lightGray1,
							borderTopLeftRadius: SIZES.radius,
							borderTopRightRadius: SIZES.radius,
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						{/* Left */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.primary,
									height: 40,
									width: 40,
									marginRight: SIZES.radius,
									borderRadius: SIZES.radius,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Image
									source={icons.cart}
									style={{
										height: 22,
										width: 22,
										tintColor: COLORS.white,
										marginTop: -2
									}}
								/>
							</View>
							<View>
								{language == "E" && <Text style={{ ...FONTS.h4 }}>Order from Harsh</Text>}
								{language == "H" && <Text style={{ ...FONTS.h4 }}>Harsh Parwal का आर्डर</Text>}
								<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order No." : "आर्डर न."} 14432</Text>
							</View>
						</View>

						{/* Right */}
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order Status" : "आर्डर स्टेटस"}</Text>
							<Image
								source={icons.right}
								style={{
									height: 8,
									width: 8,
									marginLeft: 3,
									tintColor: COLORS.primary
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* Lower Half */}
					<View
						style={{
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
						}}
					>
						<View
							style={{
								marginBottom: SIZES.radius * 1.3
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>1</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Dry Clean</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									// marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>2</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Curtain Cleaning</Text>
							</View>
						</View>
						<View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray1, marginBottom: SIZES.radius * 1.3 }}></View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>02 May 2023 at 01:50PM</Text>
							<Text style={{ ...FONTS.h5 }}>₹ 200</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						backgroundColor: COLORS.white,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray1,
						borderWidth: 1,
						marginBottom: SIZES.padding
					}}
				>
					{/* Upper Half */}
					<View
						style={{
							backgroundColor: COLORS.lightGray2,
							borderBottomWidth: 1,
							borderBottomColor: COLORS.lightGray1,
							borderTopLeftRadius: SIZES.radius,
							borderTopRightRadius: SIZES.radius,
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						{/* Left */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.primary,
									height: 40,
									width: 40,
									marginRight: SIZES.radius,
									borderRadius: SIZES.radius,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Image
									source={icons.cart}
									style={{
										height: 22,
										width: 22,
										tintColor: COLORS.white,
										marginTop: -2
									}}
								/>
							</View>
							<View>
								{language == "E" && <Text style={{ ...FONTS.h4 }}>Order from Harsh</Text>}
								{language == "H" && <Text style={{ ...FONTS.h4 }}>Harsh Parwal का आर्डर</Text>}
								<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order No." : "आर्डर न."} 14432</Text>
							</View>
						</View>

						{/* Right */}
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order Status" : "आर्डर स्टेटस"}</Text>
							<Image
								source={icons.right}
								style={{
									height: 8,
									width: 8,
									marginLeft: 3,
									tintColor: COLORS.primary
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* Lower Half */}
					<View
						style={{
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
						}}
					>
						<View
							style={{
								marginBottom: SIZES.radius * 1.3
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>1</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Dry Clean</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									// marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>2</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Curtain Cleaning</Text>
							</View>
						</View>
						<View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray1, marginBottom: SIZES.radius * 1.3 }}></View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>02 May 2023 at 01:50PM</Text>
							<Text style={{ ...FONTS.h5 }}>₹ 200</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						backgroundColor: COLORS.white,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray1,
						borderWidth: 1,
						marginBottom: SIZES.padding
					}}
				>
					{/* Upper Half */}
					<View
						style={{
							backgroundColor: COLORS.lightGray2,
							borderBottomWidth: 1,
							borderBottomColor: COLORS.lightGray1,
							borderTopLeftRadius: SIZES.radius,
							borderTopRightRadius: SIZES.radius,
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						{/* Left */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.primary,
									height: 40,
									width: 40,
									marginRight: SIZES.radius,
									borderRadius: SIZES.radius,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Image
									source={icons.cart}
									style={{
										height: 22,
										width: 22,
										tintColor: COLORS.white,
										marginTop: -2
									}}
								/>
							</View>
							<View>
								{language == "E" && <Text style={{ ...FONTS.h4 }}>Order from Harsh</Text>}
								{language == "H" && <Text style={{ ...FONTS.h4 }}>Harsh Parwal का आर्डर</Text>}
								<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order No." : "आर्डर न."} 14432</Text>
							</View>
						</View>

						{/* Right */}
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order Status" : "आर्डर स्टेटस"}</Text>
							<Image
								source={icons.right}
								style={{
									height: 8,
									width: 8,
									marginLeft: 3,
									tintColor: COLORS.primary
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* Lower Half */}
					<View
						style={{
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
						}}
					>
						<View
							style={{
								marginBottom: SIZES.radius * 1.3
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>1</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Dry Clean</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									// marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>2</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Curtain Cleaning</Text>
							</View>
						</View>
						<View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray1, marginBottom: SIZES.radius * 1.3 }}></View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>02 May 2023 at 01:50PM</Text>
							<Text style={{ ...FONTS.h5 }}>₹ 200</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						backgroundColor: COLORS.white,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray1,
						borderWidth: 1,
						marginBottom: SIZES.padding
					}}
				>
					{/* Upper Half */}
					<View
						style={{
							backgroundColor: COLORS.lightGray2,
							borderBottomWidth: 1,
							borderBottomColor: COLORS.lightGray1,
							borderTopLeftRadius: SIZES.radius,
							borderTopRightRadius: SIZES.radius,
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						{/* Left */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.primary,
									height: 40,
									width: 40,
									marginRight: SIZES.radius,
									borderRadius: SIZES.radius,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Image
									source={icons.cart}
									style={{
										height: 22,
										width: 22,
										tintColor: COLORS.white,
										marginTop: -2
									}}
								/>
							</View>
							<View>
								{language == "E" && <Text style={{ ...FONTS.h4 }}>Order from Harsh</Text>}
								{language == "H" && <Text style={{ ...FONTS.h4 }}>Harsh Parwal का आर्डर</Text>}
								<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order No." : "आर्डर न."} 14432</Text>
							</View>
						</View>

						{/* Right */}
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.primary }}>{language == "E" ? "Order Status" : "आर्डर स्टेटस"}</Text>
							<Image
								source={icons.right}
								style={{
									height: 8,
									width: 8,
									marginLeft: 3,
									tintColor: COLORS.primary
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* Lower Half */}
					<View
						style={{
							paddingHorizontal: SIZES.radius * 1.3,
							paddingVertical: SIZES.radius * 1.3,
						}}
					>
						<View
							style={{
								marginBottom: SIZES.radius * 1.3
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>1</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Dry Clean</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									// marginBottom: 4
								}}
							>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>2</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginRight: SIZES.base, flex: 1 }}>x</Text>
								<Text style={{ ...FONTS.body4, flex: 30 }}>Curtain Cleaning</Text>
							</View>
						</View>
						<View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray1, marginBottom: SIZES.radius * 1.3 }}></View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>02 May 2023 at 01:50PM</Text>
							<Text style={{ ...FONTS.h5 }}>₹ 200</Text>
						</View>
					</View>
				</View>
			</View>

		);
	}



	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
				paddingHorizontal: SIZES.padding
			}}
		>
			{/*Header*/}
			{renderHeader()}
			<ScrollView
				showsVerticalScrollIndicator={false}
			>
				{renderOrders()}
			</ScrollView>
		</View>
	)
}

export default Orders;
export { order };