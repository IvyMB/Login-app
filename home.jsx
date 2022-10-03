import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function Home() {

  return (
    <View style={styles.container}>
      <Text>Bem vindo ao nosso sistema!</Text>
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