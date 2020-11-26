import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';


const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <KeyboardAvoidingView
            behavior={null}
            style={styles.container}>
            <View style={styles.container2}>
                <Spacer>
                    <Text h3>Sign Up for Tracker</Text>
                </Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autuCorrect={false}
                />
                <Spacer />
                <Input
                    secureTextEntry
                    label={"Password"}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autuCorrect={false}
                />
                {state.errMessage!='' && <Text style={styles.errorMessage}>{state.errMessage}</Text>}

                <Spacer>
                    <Button title="Sign Up" onPress={() => signup({ email, password })} />
                </Spacer>
            </View>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        // flex:1,
        flexGrow: 1,
        flexShrink: 1,
        marginBottom: 175,
        justifyContent: 'center',
    },
    errorMessage:{
        fontSize:16,
        color:'red',
        marginRight:10
    }
});

export default SignupScreen;