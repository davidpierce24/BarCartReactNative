import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const BottomNavigation = () => {

return (
    <View className='flex items-center pt-4 pb-2'>
        <TouchableOpacity className='bg-white rounded-full shadow-md shadow-slate-700/50'>
            <Feather name="plus-circle" size={50} color="#155e75" />
        </TouchableOpacity>
    </View>
)
}

export default BottomNavigation