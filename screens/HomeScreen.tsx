import { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

return (
<SafeAreaView className='p-5'>
    <Text className='text-red-500'>HomeScreen</Text>
</SafeAreaView>
)
}

export default HomeScreen