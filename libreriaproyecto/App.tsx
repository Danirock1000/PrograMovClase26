import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButtom from './src/components/custombuttom';



export default function App() {

const handleOnLogin = () => {
  console.log("Prueba desde app");
  alert("Alerta desde App");
}

const handleOnLogout = () => {
  console.log("Prueba desde app");
  alert("Alerta Logout desde App");
}

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <CustomButtom title={'Login'} onClick={()=>{handleOnLogin}}/>
      <CustomButtom title={'Salir'} onClick={()=>{handleOnLogout}}/>
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
});
