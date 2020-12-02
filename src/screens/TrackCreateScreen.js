import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return (
        <>
            <Text h2>Create a Track</Text>
            <Map />
        </>
    )
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;