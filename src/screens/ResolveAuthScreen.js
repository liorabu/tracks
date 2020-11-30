import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';
import { ActivityIndicator, StyleSheet, Text, View, Alert } from "react-native";

const ResolveAuthScreen = () => {
    const { state, tryLocalSignin } = useContext(AuthContext);
    useEffect(() => {

        setTimeout(() => {

            return (
                tryLocalSignin(),
                { ...state, isLoading: false }
            )
          
        }, 2000);
        
    }, []);



    return (
        <View style={[styles.container, styles.horizontal]}>
            <Text style={styles.text}>the page</Text>
            <ActivityIndicator size={200} color="#A9A9A9" />
            <Text style={styles.text}>is loading</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 10
    },
    text: {
        alignSelf: 'center',
        fontSize: 35,
        textShadowRadius: 20,
        textShadowColor: "#A9A9A9"
    }
});

export default ResolveAuthScreen;