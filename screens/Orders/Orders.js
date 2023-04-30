import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { Header, IconButton, TextButton, CardItem, CartQuantityButton } from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

var order;
const Orders = ({ navigation }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)
    function renderHeader() {
        return (
            <Header
                title="Orders Recieved"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
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
                        style={{
                            width: 40
                        }}
                    />

                }

            />
        )
    }
    const newOrders = [
        {
            id: 1,
            name: "Order 1",
            icon: require("../../assets/icons/cart.png"),
            qty: "1234"
        },
        {
            id: 2,
            name: "Order 2",
            icon: require("../../assets/icons/cart.png"),
            qty: "1234"
        },
        {
            id: 3,
            name: "Order 3",
            icon: require("../../assets/icons/cart.png"),
            qty: "1234"
        }

    ]
    function renderMyCards() {


        return (
            <View>
                {newOrders.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={{ ...item, key: "MyCard" }}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => {
                                console.log("Placed success")
                                order = newOrders[item.id - 1];
                                navigation.navigate("OrderDetail");
                            }}
                        // onPress = {() => setSelectedCard({...item, key : "MyCard"})}
                        />

                    )
                })}
            </View>
        )
    }
    const oldOrders = [
        {
            id: 1,
            name: "Old  1",
            icon: require("../../assets/icons/cart.png"),
            qty: "1234"
        },
        {
            id: 2,
            name: "Old 2",
            icon: require("../../assets/icons/cart.png"),
            qty: "1234"
        },
        {
            id: 3,
            name: "Old 3",
            icon: require("../../assets/icons/cart.png"),
            qty: "1234"
        }

    ]
    function renderAddNewCard() {

        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}>
                <Text style={{ ...FONTS.h3 }}>Past Orders</Text>
                {oldOrders.map((item, index) => {
                    return (
                        <CardItem
                            key={`NewCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`}

                            onPress={() => {
                                console.log("Placed success")
                                order = oldOrders[item.id - 1];
                                navigation.navigate("OrderDetail");
                            }}
                        />

                    )
                })}
            </View>
        )
    }
    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}>

                <TextButton
                    disabled={selectedCard == null}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedCard == null ? COLORS.gray : COLORS.primary
                    }}
                    label={selectedCard?.key == "NewCard" ? "Add" : "Place Your Order"}
                    onPress={() => {
                        if (selectedCard?.key == "NewCard") {
                            navigation.navigate("AddCard", { selectedCard: selectedCard })
                        }
                        else {
                            navigation.navigate("Checkout", { selectedCard: selectedCard })
                        }
                    }}

                />

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/*Header*/}
            {renderHeader()}

            {/* Cards */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/*My Cards */}
                {renderMyCards()}

                {/*Add new Cards*/}
                {renderAddNewCard()}

            </ScrollView>

            {/*Footer*/}
            {/* {renderFooter()} */}
        </View>
    )
}

export default Orders;
export { order };