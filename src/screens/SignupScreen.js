import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin()
        const unsubscribe = navigation.addListener('blur', () => {
            clearErrorMessage()
        });

        return unsubscribe;
    }, []);

    return (

        < View
            style={{ paddingTop: insets.top,
                paddingBottom: insets.bottom,
        
                flex: 1,
                justifyContent: 'center'
                // alignItems: 'center',
            }}  >
            < AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errMessage}
                onSubmit={signup}
                SubmitButtonText="Sign Up"
            />
            <Spacer>
                <NavLink routeName="Signin" text="Already have an account? Sign in instead." />
            </Spacer>
        </View >

    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginRight: 10
    }
});

export default SignupScreen;