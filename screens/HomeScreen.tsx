import { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
// import { styled } from 'nativewind/dist/styled';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';



const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const data = ["Jack Daniels", "Captain Morgan", "Evan Williams", "Jim Beam", "Raleigh Rum Company", "Tito's", "Midori", "Baileys Creamy", "Eagle Rare", "Kraken", 'El Dorado 12 year']

return (
<SafeAreaView className='bg-cyan-800'>
    <View className='h-full'>
        <TopNavigation />

        <ScrollView className='px-5 py-2 bg-cyan-800 flex-col'> 
            {data?.map((data) => (
                <TouchableOpacity className='w-full bg-gray-800/25 rounded-xl flex items-center p-5 mt-5'>
                    <Text className='text-xl text-white'>{data}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        <BottomNavigation />
    </View>
</SafeAreaView>
)
}

export default HomeScreen