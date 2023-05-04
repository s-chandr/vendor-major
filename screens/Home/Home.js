import React from 'react';
import {
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import { HorizontalClothesCard, VerticalClothesCard } from "../../components";
import {
	COLORS,
	FONTS,
	SIZES,
	dummyData,
	icons
} from "../../constants";
import { location } from '../Authentication/SignUp';
import { vendorServicesMap } from '../VendorServices/VendorServices';
import { language } from '../Language/Launguage';
import { images } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
	const navigation = useNavigation();
	console.log(vendorServicesMap);

	function renderPickUpFrom() {
		return (
			<View
				style={{
					marginTop: SIZES.radius
				}}
			>
				<Text
					style={{
						color: COLORS.primary,
						...FONTS.body3
					}}
				>
					{language == "E" ? "SHOP LOCATION" : "दुकान का स्थान"}
				</Text>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: SIZES.base,
						alignItems: 'center'
					}}
				>
					<Text style={{ ...FONTS.h3 }}>
						{location}
					</Text>
					<Image
						source={icons.down_arrow}
						style={{
							marginLeft: SIZES.base,
							height: 20,
							width: 20,
							tintColor: COLORS.primary
						}}
					/>
				</TouchableOpacity>
			</View>
		)
	}

	return (
		<View
			style={{
				flex: 1,
				marginHorizontal: SIZES.padding
			}}
		>
			{renderPickUpFrom()}

			<Text style={{ ...FONTS.h3, marginTop: SIZES.padding }}>{language == "E" ? "Dash Board" : "डैशबोर्ड"}</Text>

			<TouchableOpacity
				style={{
					width: "100%",
					backgroundColor: COLORS.lightGray2,
					height: 125,
					paddingVertical: SIZES.padding,
					marginTop: SIZES.padding,
					borderRadius: SIZES.radius,
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: SIZES.padding
				}}
			>
				<Image
					source={images.rupee}
					style={{
						height: 65,
						width: 65,
						tintColor: COLORS.primary,
						shadowColor: COLORS.black,
						marginRight: SIZES.padding
					}}
				/>
				<View
					style={{
						height: "72%",
						width: 1.3,
						borderRadius: 10,
						backgroundColor: COLORS.gray2,
						marginRight: SIZES.padding
					}}
				></View>
				<View>
					<Text style={{ ...FONTS.h3 }}>{language == "E" ? "Total Revenue" : "कुल आय"}</Text>
					<Text style={{ ...FONTS.h1, color: COLORS.primary, marginTop: "5%" }}>₹2000</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					width: "100%",
					backgroundColor: COLORS.lightGray2,
					height: 125,
					paddingVertical: SIZES.padding,
					marginTop: SIZES.padding,
					borderRadius: SIZES.radius,
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: SIZES.padding,
					borderColor: COLORS.primary,
					borderWidth: 1.3
				}}
				onPress={() => {
					navigation.navigate("Orders");
				}}
			>
				<View
					style={{
						backgroundColor: COLORS.primary,
						height: 65,
						width: 65,
						marginRight: SIZES.padding,
						borderRadius: 50,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Image
						source={images.new_orders}
						style={{
							height: 36,
							width: 36,
							tintColor: COLORS.white,
							marginTop: -4
						}}
					/>
				</View>
				<View
					style={{
						height: "72%",
						width: 1.3,
						borderRadius: 10,
						backgroundColor: COLORS.primary,
						marginRight: SIZES.padding
					}}
				></View>
				<View>
					<Text style={{ ...FONTS.h3 }}>{language == "E" ? "New Orders" : "नए ऑर्डर्स"}</Text>
					<Text style={{ ...FONTS.h1, color: COLORS.primary, marginTop: "5%" }}>2</Text>
				</View>
				<View
					style={{
						width: 20,
						height: 20,
						backgroundColor: COLORS.primary,
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						top: -8,
						right: -8
					}}
				></View>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					width: "100%",
					backgroundColor: COLORS.lightGray2,
					height: 125,
					paddingVertical: SIZES.padding,
					marginTop: SIZES.padding,
					borderRadius: SIZES.radius,
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: SIZES.padding
				}}
				onPress={() => {
					navigation.navigate("Orders");
				}}
			>
				<View
					style={{
						backgroundColor: COLORS.primary,
						height: 65,
						width: 65,
						marginRight: SIZES.padding,
						borderRadius: 50,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Image
						source={images.orders_completed}
						style={{
							height: 36,
							width: 36,
							tintColor: COLORS.white,
							marginTop: -4
						}}
					/>
				</View>
				<View
					style={{
						height: "72%",
						width: 1.3,
						borderRadius: 10,
						backgroundColor: COLORS.gray2,
						marginRight: SIZES.padding
					}}
				></View>
				<View>
					<Text style={{ ...FONTS.h3 }}>{language == "E" ? "Orders Completed" : "संपन्न ऑर्डर्स"}</Text>
					<Text style={{ ...FONTS.h1, color: COLORS.primary, marginTop: "5%" }}>4</Text>
				</View>
			</TouchableOpacity>

			<View style={{ height: 230 }} />
		</View>
	)
}

export default Home;