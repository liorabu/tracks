import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            clearErrorMessage()
        });

        return unsubscribe;
    }, []);



    return (
        <KeyboardAvoidingView
            behavior={null}
            style={styles.container}>
            <View style={styles.container2}>
                <AuthForm
                    headerText="Sign In for Tracker"
                    errorMessage={state.errMessage}
                    onSubmit={signin}
                    SubmitButtonText="Sign In"
                />
                <Spacer>
                    <NavLink routeName="Signup" text="Don't have an account? Go back to sign up." />
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
        flexGrow: 1,
        flexShrink: 1,
        marginBottom: 175,
        justifyContent: 'center',
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginRight: 10
    }
});

export default SigninScreen;