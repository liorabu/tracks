import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, SubmitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            { errorMessage!='' &&<Text style={styles.errorMessage}>{errorMessage}</Text>}

            <Spacer>
                <Button title={SubmitButtonText} onPress={() => onSubmit({email,password})} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginRight: 10
    },
});

export default AuthForm;