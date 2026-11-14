import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';
import {styles} from '../App';

const Boat = ({ name, description, poster}) => {
    return (
        <View style={{width:'100%'}}>
            <Text style={
                [styles.child, styles.title,
                    {padding: 3, margin: 10, marginLeft: 0, marginRight: 0, width:'100%'}]}>
                <FontAwesome6 name={"sailboat"} size={40} color={"white"} />{name}</Text>
            <Image source={poster}
                style={{width:'100%', height:'400', marginLeft: 0, marginRight: 0}} />
            <Text>{description}</Text>
        </View>
    )
}

export default Boat;