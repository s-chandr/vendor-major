import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { COLORS } from '../../constants';

const MyEarnings = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.red
            }}
        >
            <Text>MyEarnings</Text>
        </View>
    )
}

export default MyEarnings