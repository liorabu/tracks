import React , {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {requestPermissionsAsync} from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
const [err,setErr]=useState(null);

const startWatching=async()=>{
    try{
        const {granted} = await requestPermissionsAsync();
        if(!granted){
            throw new Error('Location permission not granted');
        }
    }catch(e){
      setErr(e);      
    }
}

useEffect(()=>{
startWatching();
},[]
)

    return (
        <>
            <Text h2>Create a Track</Text>
            <Map />
            {err&&<Text>Please enable location services</Text>}
        </>
    )
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;