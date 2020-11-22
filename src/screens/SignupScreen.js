import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = props => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>Signup Screen</Text>
            <Button title="Go to Signin" onPress={() => props.navigation.navigate('Signin')} />
        </>
    );
};

const styles = StyleSheet.create({

});

export default SignupScreen;