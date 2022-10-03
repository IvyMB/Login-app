import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, AppRegistry } from 'react-native';

  var data = [{key: '1', user: 'Ivy', password: '1234'}];

export default function Index ({navigation}) 
{ 
    const [insertUser, setInsertUser] = useState('');
    const [insertPass, setInsertPass] = useState('');
    const [error, setError] = useState('');

    const handleRegister = function (e)
    {
      e.preventDefault(); 
      navigation.navigate('Register')
    }
        const handleSubmit = (e) => {
      e.preventDefault();
      if(insertUser === 0 && insertUser === 0){
        const errorNull = setErrorM('Preencha os campos');
      } else if (users.user === insertUser && users.password === insertPass)
      {
        const success = setauthenticated('true');
        navigation.navigate('Home');
      }
      else {
          var error = setErrorMessage('Dados incorretos');
        navigation.navigate('Index');
        }
      };

      return(
        <View style={styles.container}>
        <Text>Hi, nice to see you</Text>
        <Text>Please, login or make a new account</Text>
        <TextInput placeholder='Insert your login' onChangeText={(text)=> setInsertUser(text)} value={insertUser}  style={styles.input} 
          name='userLogin'
        ></TextInput>
        <TextInput placeholder='Insert your password' style={styles.input} name='password' value={insertPass}
        onChangeText={(pass)=> setInsertPass(pass)} secureTextEntry={true} ></TextInput>
        <View>
        <Button title="Login"  name='loginButton' onPress={handleSubmit} style={styles.button} color={'#9370DB'}/>
      </View>
      <View style={styles.containerButton}>
      <Button title="Register"  name='registerButton' onPress={handleRegister} style={styles.button} color={'#7B68EE'}/>
      </View>
      <StatusBar style="auto" />
      <Text value={error}></Text>
      </View>
    )
    }; 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      border:1,
      borderRadius: 8
    },
    containerButton: {
      paddingBottom: 10,
      marginVertical: 5
    },
    input: {
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: '#CFDFF2',
      width: 150,
      height: 40,
      textAlign: 'center'
    }
  });
// botão da pagina register 
  //      