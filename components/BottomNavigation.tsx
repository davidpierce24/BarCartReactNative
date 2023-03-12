import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const BottomNavigation = () => {

return (
    <View className='flex items-center pt-4 pb-2'>
        <TouchableOpacity>
            <Feather name="plus-circle" size={40} color="#FFFFFF" />
        </TouchableOpacity>
    </View>
)
}

export default BottomNavigation