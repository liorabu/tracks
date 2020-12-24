import React, { useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context as TrackContext } from '../contexts/TrackContext';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const TrackListScreen = props => {
    const { state, fetchTracks } = useContext(TrackContext);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            const unsubscribe = fetchTracks;

            return unsubscribe;
        }, [])
    );
    return (
        <>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                     onPress={()=>
                    navigation.navigate('TrackDetail',{_id:item._id})
                    }
                    >
                        <ListItem>
                        <ListItem.Chevron />
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem>
                    </TouchableOpacity>
                }}
            />

        </>

    );

};

const styles = StyleSheet.create({

});

export default TrackListScreen;