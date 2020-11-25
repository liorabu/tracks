import React,{useState} from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return (
       
        <KeyboardAvoidingView
    //   behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
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
                <Spacer>
                    <Button title="Sign Up" />
                </Spacer> 
            </View> 
            </KeyboardAvoidingView>
         
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    container2:{
        // flex:1,
         flexGrow: 1,
        flexShrink: 1,
        marginBottom:175,
        justifyContent: 'center',
    }
});

export default SignupScreen;