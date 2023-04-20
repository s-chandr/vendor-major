import React from 'react';
import {
    View,
    Text
} from 'react-native';

import OTPInputView from "@twotalltotems/react-native-otp-input"
import { FONTS, SIZES, COLORS } from "../../constants";
import { TextButton } from "../../components";
import { AuthLayout } from "../";
import { number } from "./PhoneNumber";
import { language } from '../Language/Launguage';

const Otp = ({ navigation }) => {
    const [timer, setTimer] = React.useState(60)
    const [otp, setOtp] = React.useState("")

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                }
                else {
                    return prevTimer
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <AuthLayout
            title={language == "E" ? "OTP Authentication" : "ओटीपी प्रमाणीकरण"}
            subtitle={language == "E" ? "An authentication code has been sent to you" : "कृपया आपको भेजा गया प्रमाणीकरण कोड दर्ज करें"}
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}>
                <OTPInputView
                    pinCount={6}
                    style={{
                        width: "100%",
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 45,
                        height: 45,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        // console.log(code)
                        setOtp(code)
                    }}
                />
                {/* CountDown Timer */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>{language == "E" ? "Didn't recieve code? " : "कोड प्राप्त नहीं हुआ? "}</Text>
                    <TextButton label={language=="E"?`Resend `:"पुन: भेजें " + `(${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            // marginTop: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                <TextButton
                    label={language == "E" ? "Continue" : "आगे बढ़ें"}
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: "center",
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => {
                        // const msg = fetch('http://1e0c-223-236-24-92.ngrok.io/api/v1/sms/validate', {
                        //     method: 'POST',
                        //     headers: {
                        //         Accept: 'application/json',
                        //         'Content-Type': 'application/json'
                        //     },
                        //     body: JSON.stringify(
                        //         {
                        //             "phoneNumber": number,
                        //             "userInputOtp": otp
                        //         }
                        //     )
                        // });
                        // msg.then((response) => response.json()).then((json) => { console.log(json.message) });
                        navigation.navigate("SignUp")
                        console.log(otp);
                        console.log(number);
                    }}


                />

                {language == "E" && <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        By Signing Up you agree to our
                    </Text>
                    <TextButton
                        label="Terms and Conditions"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("TnC")}
                    />
                </View>}

                {language == "H" && <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        साइन अप करके, आप हमारे
                    </Text>
                    <View
                        style={{ flexDirection: 'row' }}
                    >
                        <TextButton
                            label="नियमों और शर्तों "
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.body3
                            }}
                            onPress={() => console.log("TnC")}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.body3
                            }}
                        >
                            से सहमत होते हैं
                        </Text>
                    </View>
                </View>}
            </View>
        </AuthLayout>

    )
}

export default Otp;