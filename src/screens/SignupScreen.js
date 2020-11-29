import React, { useContext,useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {
    const { state, signup,clearErrorMessage } = useContext(AuthContext);
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
                    headerText="Sign Up for Tracker"
                    errorMessage={state.errMessage}
                    onSubmit={signup}
                    SubmitButtonText="Sign Up"
                />
                <Spacer>
                    <NavLink routeName="Signin" text="Already have an account? Sign in instead."/>
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

export default SignupScreen;