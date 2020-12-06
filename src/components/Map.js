import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView,{Polyline} from 'react-native-maps';

const Map =()=>{
    let points=[];
for(let i=0;i<20;i++){
    if(i%2===0){
        points.push({
            latitude: 31.820284+i*0.0001,
            longitude: 35.255085+i*0.0008,
        })
    }else{
        points.push({
            latitude: 31.820284+i*0.0002,
            longitude: 35.255085+i*0.0005,
        })
    }
    
}

    return <MapView initialRegion={{
        latitude: 31.820284,
        longitude: 35.255085,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }} style={styles.map} >
        <Polyline coordinates={points}/>
    </MapView>
};

const styles=StyleSheet.create({
map:{
    height:300
}
});

export default Map;