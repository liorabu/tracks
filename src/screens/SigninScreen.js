import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SigninScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const { state, signin, clearErrorMessage,tryLocalSignin } = useContext(AuthContext);
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

    );
};

const styles = StyleSheet.create({
   
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginRight: 10
    }
});

export default SigninScreen;