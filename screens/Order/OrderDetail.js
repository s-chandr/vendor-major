import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { Header, IconButton, TextButton,  CardItem,CartQuantityButton } from '../../components';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../../constants';
import {order} from '../Card/MyCard';

const OrderDetail = ({ navigation }) => {

    const [selectedCard, setSelectedCard] =  React.useState(null)
            function renderHeader(){
                return (
                    <Header
                    title = {order.name}
                    containerStyle = {{
                        height: 50,
                        marginHorizontal:SIZES.padding,
                        marginTop:40
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
                                    borderColor: COLORS.primary
                                }}
                                iconStyle={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.primary
                                }}
                                onPress={() => navigation.goBack()}
                            />
                        }
                        rightComponent={
                            <View
                                style = {{
                                    width : 40
                                }}
                            />

                        }
                    
                    />
                )
            }
            const details = [
                {
                    id: 1,
                    name: "Jeans X 4 ",
                    icon: require("../../assets/icons/cart.png"),
                    
                },
                {
                    id: 2,
                    name: "Shirt X 2 ",
                    icon: require("../../assets/icons/cart.png"),
                    
                },
                {
                  id: 3,
                  name: "Saree X 2 ",
                  icon: require("../../assets/icons/cart.png"),
                  
                }
              
              ]
            function renderDetailCards () {
                
               
                return(
                    <View>
                        {details.map(( item, index) => {
                            return(
                                <CardItem
                                    key={`MyCard-${item.id}`}
                                    item = {{...item, key: "MyCard"}}   
                                    isSelected = {`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                                    // onPress={() => {
                                    //     console.log("Placed success" )
                                    //     order=newOrders[item.id-1];
                                    //     navigation.navigate("OrderDetail");
                                    // }}
                                    onPress = {() => setSelectedCard({...item, key : "MyCard"})}
                                    />

                            )
                        })}
                    </View>
                )
            }
            
               
    return (
        <View
            style={{
                flex: 1,
                backgroundColor : COLORS.white
            }}
        >
         {/*Header*/}
         {renderHeader()}

         {renderDetailCards()}
        </View>
    )
}

export default OrderDetail;