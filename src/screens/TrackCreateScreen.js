import '../_mockLocation';
import React, {  useContext, useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
    const isFocused = useIsFocused();
    const { state:{recording}, addLocation } = useContext(LocationContext);
    const callback=useCallback((location) => {
        addLocation(location, recording)
    },[recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <ScrollView>
            <Text h2>Create a Track</Text>
            <Map />
            {err && <Text>Please enable location services</Text>}
            <TrackForm />
        </ScrollView>
    )
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;