import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TurboModuleRegistry } from 'react-native';
import React, {useState} from 'react';
import Users from './index';

export default function Register ({navigation}) {
    const [userValue, setUser] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [cpfValue, setCpf] = useState('');

        let handleRegister = (e) => {
            e.preventDefault();
            
                if(userValue !== 0 && passwordValue !== 0){
                    const arrayUser = {User: userValue, cpf: cpfValue , password: passwordValue};
                    const addUser = Users.insertData(arrayUser);
                    const isok = true;

                    if (isok == true){
                        insertData(addUser)
                        navigation.navigate('Index');
                        };

                    } else {
                    const error = "preencha os campos";
                    navigation.navigate('Register');
                }
            } 

return (
    <View style={styles.container}>
        <Text>Please, tell us more about you.</Text>
    <View>
        <TextInput placeholder='Insert your username' name='user' style={styles.input}  value={userValue} onChangeText={(text)=> setUser(text)}/>
        <TextInput placeholder='Insert your CPF' name='cpf' keyboardType='number-pad' style={styles.input} value={cpfValue} onChangeText={(cpf) => setCpf(cpf)} />
        <TextInput placeholder='Insert your password' name='password' secureTextEntry={true} style={styles.input} value={passwordValue}  onChangeText={(password) => setPassword(password)} />
    </View>
    <View>
        <Button title="Register" onPress={handleRegister}  color={'#9370DB'}/>
    </View>
    </View>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#CFDFF2',
        paddingBottom: 10,
        marginVertical: 5
    }
    });