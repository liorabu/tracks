import * as Location from 'expo-location';

const tenMeterdWithDegrees=0.0001;

const getLocation=increment=>{
    return {
        timestamp:10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            alltitudeAccuracy:5,
            alatitude:5,
            longitude:35.255085+increment*tenMeterdWithDegrees,
            latitude:31.820284+increment*tenMeterdWithDegrees,
        }
    }
}

let counter=0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    });
    counter++;
},1000)