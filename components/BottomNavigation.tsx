import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddButton from './AddButton';

const BottomNavigation = () => {

return (
    <View className='bg-cyan-800'>
        <View className='flex flex-row justify-between pt-4 pb-4 px-8'>
            <TouchableOpacity>
                <FontAwesome5 name="home" size={30} color="#ffffff"/>
            </TouchableOpacity>
            <TouchableOpacity className='mr-16'>
                <FontAwesome name="search" size={30} color="#ffffff"/>
            </TouchableOpacity>
            <TouchableOpacity className=''>
                <FontAwesome5 name="list-ul" size={30} color="#ffffff"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="glass-whiskey" size={30} color="#ffffff"/>
            </TouchableOpacity>
            
        </View>
    </View>
    )
}

export default BottomNavigation