import '../_mockLocation';
import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';

const TrackCreateScreen = () => {
    const isFocused = useIsFocused();
    const { addLocation } = useContext(LocationContext);
    const [err]= useLocation(isFocused,addLocation);

    return (
        <>

            <Text h2>Create a Track</Text>
            <Map />
            {err && <Text>Please enable location services</Text>}
        </>
    )
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;