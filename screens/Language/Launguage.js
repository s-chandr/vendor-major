import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
	StyleSheet
} from 'react-native';
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { TextButton } from "../../components";
import { images } from "../../constants";
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
var chooseLanguageVoiceover = new Sound('choose_language_voiceover.mp3', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		console.log('failed to load the sound', error);
		return;
	}
});

var language = "";
const Language = ({ navigation, route }) => {
	return (
		<View
			style={{
				display: 'flex',
				alignItems: 'center',
				height: "100%"
			}}
		>
			<Image
				source={images.background_01}
				style={{
					width: "100%",
					height: 530,
					position: 'absolute',
					bottom: 0,
					left: 0,
					transform: [{ rotate: "-215deg" }, { translateX: 30 }, { translateY: -400 }]
				}}
			/>
			<Image
				source={images.logo_02}
				style={{
					transform: [{ scale: 0.2 }],
					// tintColor: COLORS.primary,
					marginTop: -SIZES.padding * 2
				}}
			/>
			<Text
				style={{
					...FONTS.h2,
					fontSize: 20,
					color: COLORS.darkGray,
					marginTop: -SIZES.padding * 3,
					textAlign: 'center'
				}}
			>
				Choose Your Preferred Language
			</Text>
			<Text
				style={{
					...FONTS.body3,
					lineHeight: 40,
					textAlign: 'center',
					color: COLORS.darkGray,
				}}
			>
				अपनी पसंदीदा भाषा चुनें
			</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: "10%",
					justifyContent: 'space-between',
					width: "85%",
					alignItems: 'center'
				}}
			>
				<TouchableOpacity
					style={styles.langBtn}
					onPress={() => {
						language = "H";
						chooseLanguageVoiceover.stop();
						navigation.navigate("OnBoarding")
					}}
				>
					<Image
						source={images.a}
						style={{
							tintColor: COLORS.primary,
							width: 60,
							height: 60,
							marginBottom: "12%"
						}}
					/>
					<View
						style={{
							width: "30%",
							height: 1.8,
							borderRadius: 20,
							backgroundColor: COLORS.primary,
							marginBottom: "7%"
						}}
					></View>
					<Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>Hindi</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.langBtn}
					onPress={() => {
						language = "E";
						chooseLanguageVoiceover.stop();
						navigation.navigate("OnBoarding")
					}}
				>
					<Image
						source={images.A}
						style={{
							tintColor: COLORS.primary,
							width: 60,
							height: 60,
							marginBottom: "12%"
						}}
					/>
					<View
						style={{
							width: "30%",
							height: 1.8,
							borderRadius: 20,
							backgroundColor: COLORS.primary,
							marginBottom: "7%"
						}}
					></View>
					<Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>English</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					position: 'absolute',
					bottom: "7%",
					right: "6%",
					backgroundColor: COLORS.white2,
					borderRadius: 50,
					paddingTop: SIZES.base / 1.3,
					paddingBottom: SIZES.base / 1.3,
					paddingRight: SIZES.base * 2,
					paddingLeft: SIZES.base * 2
				}}
				onPress={() => {
					chooseLanguageVoiceover.play();
				}}
			>
				<Image
					source={icons.audio_supp}
					style={{
						width: 22,
						height: 22,
						marginRight: 5,
						tintColor: COLORS.primary
					}}
				/>
				<Text style={{ ...FONTS.body3, fontSize: 14 }}>Voice Assistant</Text>
			</TouchableOpacity>
		</View>
	);
}
export default Language;
export { language };

const styles = StyleSheet.create({
	langBtn: {
		display: 'flex',
		borderWidth: 1.8,
		borderRadius: SIZES.radius,
		borderColor: COLORS.primary,
		width: "45%",
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: COLORS.white2,
		paddingTop: SIZES.padding + 5,
		paddingBottom: SIZES.padding
		// height: 'fit-content'
	}
})