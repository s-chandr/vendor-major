import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, dummyData } from "../../constants";
import AuthLayout from "../Authentication/AuthLayout";
import { vendorName } from "../Authentication/SignUp";
import { language } from "../Language/Launguage";
import { TextButton } from "../../components";

const vendorServicesMap = new Map();

const VendorServices = ({ navigation, route }) => {

    const [toggleCheckBox1, setToggleCheckBox1] = React.useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = React.useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = React.useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = React.useState(false)

    const [bottomBorderColor1, setBottomBorderColor1] = React.useState(COLORS.darkGray)
    const [bottomBorderColor2, setBottomBorderColor2] = React.useState(COLORS.darkGray)
    const [bottomBorderColor3, setBottomBorderColor3] = React.useState(COLORS.darkGray)
    const [bottomBorderColor4, setBottomBorderColor4] = React.useState(COLORS.darkGray)


    const [priceDryClean, setPriceDryClean] = React.useState(0);
    const [priceIronFold, setPriceIronFold] = React.useState(0);
    const [priceCurtainCleaning, setPriceCurtainCleaning] = React.useState(0);
    const [priceLinenWash, setPriceLinenWash] = React.useState(0);

    function isEnableProceed() {
        return toggleCheckBox1 || toggleCheckBox2 || toggleCheckBox3 || toggleCheckBox4;
    }


    return (
        <AuthLayout
            title={language == "E" ? "Welcome to LaundroMate Vendor, " + vendorName + "!" : "LaundroMate वेंडर में आपका स्वागत है, " + vendorName + "!"}
            // subtitle={language == "E" ? "Let's create your account!" : "आइए आपका अकाउंट बनाएं"}
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    marginTop: SIZES.padding / 2.5,
                    ...FONTS.h3,
                    marginLeft: SIZES.padding,
                    marginRight: SIZES.padding,
                    color: COLORS.darkGray
                }}
            >
                {language == "E" ? "Choose Your Services" : "आपके द्वारा प्रदान की जाने वाली सेवाओं का चयन करें"}
            </Text>
            <ScrollView
                style={{
                    marginTop: SIZES.base
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox1}
                            // onValueChange={(newValue) => {
                            //     setToggleCheckBox1(newValue)
                            // }}
                            tintColors={{ true: COLORS.primary }}
                        ></CheckBox>
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2,
                                marginLeft: SIZES.base,
                                marginRight: SIZES.base + 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 8
                            }}
                        >
                            <Image
                                source={dummyData.dryClean.image}
                                resizeMode="contain"
                                style={{
                                    height: 50,
                                    tintColor: COLORS.darkGray,
                                }}
                            />
                        </View>
                        <Text style={{ ...FONTS.body3 }}>{language == "E" ? "Dry Clean" : "ड्राई क्लीन"}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ ...FONTS.body3, marginRight: SIZES.base }}>₹</Text>
                        <TextInput
                            onFocus={() => {
                                if (priceDryClean > 0) {
                                    setBottomBorderColor1(COLORS.primary);
                                }
                            }}
                            onBlur={() => {
                                setBottomBorderColor1(COLORS.darkGray);
                                if (priceDryClean == 0) {
                                    setToggleCheckBox1(false);
                                }
                            }}
                            onChangeText={(value) => {
                                setPriceDryClean(value);
                                if (value > 0) {
                                    setToggleCheckBox1(true);
                                    setBottomBorderColor1(COLORS.primary);
                                }
                                if (value == 0) {
                                    setToggleCheckBox1(false);
                                    setBottomBorderColor1(COLORS.darkGray);
                                }
                            }}
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: bottomBorderColor1,
                                paddingHorizontal: SIZES.base,
                                paddingVertical: SIZES.base / 4,
                                textAlign: 'center',
                                ...FONTS.body3
                            }}
                            keyboardType="numeric"
                            placeholder="0.00"
                            placeholderTextColor={COLORS.gray}
                        />
                        <Text style={{ ...FONTS.body3, marginLeft: SIZES.base }}>/ pc</Text>
                    </View>
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
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox2}
                            // onValueChange={(newValue) => {
                            //     setToggleCheckBox2(newValue)
                            // }}
                            tintColors={{ true: COLORS.primary }}
                        ></CheckBox>
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2,
                                marginLeft: SIZES.base,
                                marginRight: SIZES.base + 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 8
                            }}
                        >
                            <Image
                                source={dummyData.heavysteampress.image}
                                resizeMode="contain"
                                style={{
                                    height: 50,
                                    tintColor: COLORS.darkGray,
                                }}
                            />
                        </View>
                        <Text style={{ ...FONTS.body3 }}>{language == "E" ? "Iron & Fold" : "इस्त्री और तह"}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ ...FONTS.body3, marginRight: SIZES.base }}>₹</Text>
                        <TextInput
                            onFocus={() => {
                                if (priceIronFold > 0) {
                                    setBottomBorderColor2(COLORS.primary);
                                }
                            }}
                            onBlur={() => {
                                setBottomBorderColor2(COLORS.darkGray);
                                if (priceIronFold == 0) {
                                    setToggleCheckBox2(false);
                                }
                            }}
                            onChangeText={(value) => {
                                setPriceIronFold(value);
                                if (value > 0) {
                                    setToggleCheckBox2(true);
                                    setBottomBorderColor2(COLORS.primary);
                                }
                                if (value == 0) {
                                    setToggleCheckBox2(false);
                                    setBottomBorderColor2(COLORS.darkGray);
                                }
                            }}
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: bottomBorderColor2,
                                paddingHorizontal: SIZES.base,
                                paddingVertical: SIZES.base / 4,
                                textAlign: 'center',
                                ...FONTS.body3
                            }}
                            keyboardType="numeric"
                            placeholder="0.00"
                            placeholderTextColor={COLORS.gray}
                        />
                        <Text style={{ ...FONTS.body3, marginLeft: SIZES.base }}>/ pc</Text>
                    </View>
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
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox3}
                            // onValueChange={(newValue) => {
                            //     setToggleCheckBox3(newValue)
                            // }}
                            tintColors={{ true: COLORS.primary }}
                        ></CheckBox>
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2,
                                marginLeft: SIZES.base,
                                marginRight: SIZES.base + 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 8
                            }}
                        >
                            <Image
                                source={dummyData.curtainCleaning.image}
                                resizeMode="contain"
                                style={{
                                    height: 50,
                                    tintColor: COLORS.darkGray,
                                }}
                            />
                        </View>
                        <Text style={{ ...FONTS.body3 }}>{language == "E" ? "Curtain Cleaning" : "पर्दे की सफाई"}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ ...FONTS.body3, marginRight: SIZES.base }}>₹</Text>
                        <TextInput
                            onFocus={() => {
                                if (priceCurtainCleaning > 0) {
                                    setBottomBorderColor3(COLORS.primary);
                                }
                            }}
                            onBlur={() => {
                                setBottomBorderColor3(COLORS.darkGray);
                                if (priceCurtainCleaning == 0) {
                                    setToggleCheckBox1(false);
                                }
                            }}
                            onChangeText={(value) => {
                                setPriceCurtainCleaning(value);
                                if (value > 0) {
                                    setToggleCheckBox3(true);
                                    setBottomBorderColor3(COLORS.primary);
                                }
                                if (value == 0) {
                                    setToggleCheckBox3(false);
                                    setBottomBorderColor3(COLORS.darkGray);
                                }
                            }}
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: bottomBorderColor3,
                                paddingHorizontal: SIZES.base,
                                paddingVertical: SIZES.base / 4,
                                textAlign: 'center',
                                ...FONTS.body3
                            }}
                            keyboardType="numeric"
                            placeholder="0.00"
                            placeholderTextColor={COLORS.gray}
                        />
                        <Text style={{ ...FONTS.body3, marginLeft: SIZES.base }}>/ pc</Text>
                    </View>
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
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox4}
                            // onValueChange={(newValue) => {
                            //     setToggleCheckBox4(newValue)
                            // }}
                            tintColors={{ true: COLORS.primary }}
                        ></CheckBox>
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2,
                                marginLeft: SIZES.base,
                                marginRight: SIZES.base + 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 8
                            }}
                        >
                            <Image
                                source={dummyData.linenWash.image}
                                resizeMode="contain"
                                style={{
                                    height: 50,
                                    tintColor: COLORS.darkGray,
                                }}
                            />
                        </View>
                        <Text style={{ ...FONTS.body3 }}>{language == "E" ? "Linen Wash" : "लिनन वाश"}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ ...FONTS.body3, marginRight: SIZES.base }}>₹</Text>
                        <TextInput
                            onFocus={() => {
                                if (priceLinenWash > 0) {
                                    setBottomBorderColor4(COLORS.primary);
                                }
                            }}
                            onBlur={() => {
                                setBottomBorderColor4(COLORS.darkGray);
                                if (priceLinenWash == 0) {
                                    setToggleCheckBox4(false);
                                }
                            }}
                            onChangeText={(value) => {
                                setPriceLinenWash(value);
                                if (value > 0) {
                                    setToggleCheckBox4(true);
                                    setBottomBorderColor4(COLORS.primary);
                                }
                                if (value == 0) {
                                    setToggleCheckBox4(false);
                                    setBottomBorderColor4(COLORS.darkGray);
                                }
                            }}
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: bottomBorderColor4,
                                paddingHorizontal: SIZES.base,
                                paddingVertical: SIZES.base / 4,
                                textAlign: 'center',
                                ...FONTS.body3
                            }}
                            keyboardType="numeric"
                            placeholder="0.00"
                            placeholderTextColor={COLORS.gray}
                        />
                        <Text style={{ ...FONTS.body3, marginLeft: SIZES.base }}>/ pc</Text>
                    </View>
                </View>
            </ScrollView>
            <TextButton
                label={language == "E" ? "Proceed" : "आगे बढ़ें"}
                disabled={isEnableProceed() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableProceed() ? COLORS.primary : COLORS.transparentPrimary
                }}
                onPress={() => {
                    toggleCheckBox1 ? vendorServicesMap.set('DryClean', priceDryClean) : () => { };
                    toggleCheckBox2 ? vendorServicesMap.set('IronFold', priceIronFold) : () => { };
                    toggleCheckBox3 ? vendorServicesMap.set('CurtainCleaning', priceCurtainCleaning) : () => { };
                    toggleCheckBox4 ? vendorServicesMap.set('LinenWash', priceLinenWash) : () => { };
                    navigation.navigate("Home");
                }}
            ></TextButton>
        </AuthLayout>
    );
}

export default VendorServices;
export { vendorServicesMap };