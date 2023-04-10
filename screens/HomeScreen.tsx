import { useLayoutEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
// import { styled } from 'nativewind/dist/styled';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';
import AddButton from '../components/AddButton';



const HomeScreen = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    
    const liquor = ["Jack Daniels", "Captain Morgan", "Evan Williams", "Jim Beam", "Raleigh Rum Company", "Tito's", "Midori", "Baileys Creamy", "Eagle Rare", "Kraken", 'El Dorado 12 year']
    
    return (
        <SafeAreaView className='bg-cyan-800'>
    <View className='h-full bg-cyan-800'>
        <TopNavigation />
        

        <ScrollView className='px-5 py-2 bg-cyan-800 flex-col'> 
        <TextInput className='bg-black/30 rounded-lg h-12 text-white px-2 font-bold text-lg pb-2 sticky top-0 mx-5 left-0 right-0' placeholder='Search' placeholderTextColor='#949494' cursorColor='#ffffff' value={search} onChangeText={e => setSearch(e.toLowerCase())} />
            {Object.values(data).filter(liquor => liquor.name.toLowerCase().includes(search)).map((liquor, i) => (
                <TouchableOpacity key={i} className='w-full bg-gray-800/25 rounded-xl flex items-center p-5 mt-5'>
                    <Text className='text-xl text-white'>{liquor.name}</Text>
                </TouchableOpacity>
            ))}
            <View className='h-20'/>
        </ScrollView>
        
        <BottomNavigation />
    </View>

    <View className='mx-40 absolute left-0 right-0 bottom-12'>
        <AddButton />
    </View>
</SafeAreaView>
)
}

export default HomeScreen


const data = {
    "Jack Daniels": {
        alcoholType: "Whiskey",
        name: "Jack Daniels",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Captain Morgan": {
        alcoholType: "Rum",
        name: "Captain Morgan",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "El Dorado 12 year": {
        alcoholType: "Rum",
        name: "El Dorado 12 year",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Kraken": {
        alcoholType: "Rum",
        name: "Kraken",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Eagle Rare": {
        alcoholType: "Whiskey",
        name: "Eagle Rare",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Baileys Creamy": {
        alcoholType: "Liquer",
        name: "Baileys Creamy",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Midori": {
        alcoholType: "Liquer",
        name: "Midori",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Tito's": {
        alcoholType: "Vodka",
        name: "Tito's",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Raleigh Rum Company": {
        alcoholType: "Rum",
        name: "Raleigh Rum Company",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Jim Beam": {
        alcoholType: "Whiskey",
        name: "Jim Beam",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
    "Evan Williams": {
        alcoholType: "Whiskey",
        name: "Evan Williams",
        stock: 2,
        totalAmount: 750,
        amountLeft: 0.5,
    },
}