import React , {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context as TrackContext} from '../contexts/TrackContext';

const TrackDetailScreen = ({route})=>{
    const {state}=useContext(TrackContext);
    const _id=route.params._id;
    
    const track= state.find(track=>track._id===_id);

    return <Text style={{fontSize:48}}>{track.name}</Text>;

};

const styles=StyleSheet.create({

});

export default TrackDetailScreen;