import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
	ScrollView,
	ImageBackground
} from 'react-native';
import { dummyData , COLORS , SIZES ,  FONTS , icons , images  } from '../../constants2';
const Home = ({ navigation }) => {
    const[trending , setTrending] = React.useState(dummyData.trendingCurrencies)
	function renderHeader() {
		const renderItem = ({item , index}) => (
			<TouchableOpacity style ={{ 
				width:180 , 
				paddingVertical :SIZES.padding,
				paddingHorizontal :SIZES.padding,
				marginLeft: index == 0 ? SIZES.padding :  0 , 
				marginRight: SIZES.radius,
				boardRadius: 10,
				backgroundColor : COLORS.white
			}} >
				
			</TouchableOpacity>
		)
		return 
		(
			<View style={{ 
				width:"100%", 
				height : 300 , 
				...styles.shadow
			}}
			>
				<ImageBackground
					source={images.banner}
					resizeMode="cover"
					style={{
						flex: 1,
						alignItems: "center"
					}}
				>

					{/* Header Bar */}
					<View 
						style = {{
							marginTop: SIZES.padding * 2 ,
							width: "100%",
							alignItems: "flex-end",
							paddingHorizontal: SIZES.padding
						}}

					>
						<TouchableOpacity style = {{
							width: 35,
							height : 35 , 
							alignItems: "center",
							justifyContent: "center"

						}}
						onPress = {() => console.log("Notofication Pressed")}
						>
							<Image source = {icons.notification_white}
								resizeMode="contain"
								style = {{flex : 1 }}></Image>
						</TouchableOpacity>
					</View>

					{/* Balance  */}
							<View
								style = {{
									alignItems: "center",
									justifyContent: "center"
								}}
							>
								<Text style = {{color:COLORS.white , ...FONTS.h3}} Your Balance ></Text>
								<Text style = {{marginTop: SIZES.base , color :COLORS.white , ...FONTS.h1 }}>${dummyData.portfolio.balance}</Text>
								<Text style = {{color:COLORS.white , ...FONTS.body5}}>{dummyData.portfolio.changes} last 24 hrs</Text>
							</View>

					{/* Trending */}

					<View
						style = {{
								position: 'absolute',
								bottom: '-30'
						}}
						>
							<Text style = {{marginLeft : SIZES.padding, color : COLORS.white, ...FONTS.h2}}>Trendin	</Text>
							<FlatList
								contentContainerStyle = {{marginTop : SIZES.base }} data = {trending} renderItem = {renderItem}
								keyExtractor={item => '${item.id}'}
								horizontal
								showsHorizontalScrollIndicator={false}
							></FlatList>
					</View>
				</ImageBackground>
			</View>
		)
	}
	return (
		<ScrollView>
			<View style = {{ flex : 1 , paddingBottom :130 }}>
				{renderHeader()}
			</View>
		</ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;