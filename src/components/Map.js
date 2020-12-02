import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const Map =()=>{
    return <MapView initialRegion={{
        latitude: 31.820284,
        longitude: 35.255085,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }} style={styles.map} />
};

const styles=StyleSheet.create({
map:{
    height:300
}
});

export default Map;