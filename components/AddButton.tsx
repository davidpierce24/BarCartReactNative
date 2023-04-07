import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddButton = () => {

    return (
            <TouchableOpacity className='flex items-center  rounded-full shadow-md shadow-slate-900/70'>
                {/* <Feather name="plus-circle" size={80} color="#155e75"/> */}
                <AntDesign name="pluscircle" size={70} color="#ffffff"/>
            </TouchableOpacity>
    )
}

export default AddButton