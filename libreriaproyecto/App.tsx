import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButtom from "./src/components/custombuttom";
import CustomInput from "./src/components/custominput";

export default function App() {
  const handleOnLogin = () => {
    console.log("Prueba desde app");
    alert("Alerta desde App");
  };

  const handleOnLogout = () => {
    console.log("Prueba desde app");
    alert("Alerta Logout desde App");
  };

  const handlePasswordChange = () => {
    console.log("Prueba desde app");
    alert("Alerta Cambiar Contraseña");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style= {styles.titleText}>Prueba de texto</Text>
        <View style={styles.buttonsWrapper}>
          <StatusBar style="auto" />
          <CustomButtom
            title={"Login"}
            onClick={handleOnLogin}
          />
          <CustomButtom
            title={"Salir"}
            onClick={handleOnLogout}
          />
          <CustomButtom
            title={"¿Olvidaste tu contraseña?"}
            variant="secondary"
            onClick={handlePasswordChange}
          />
        </View>

        <CustomInput/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f19595",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#f3f4f6",
    height: "80%",
    width: "80%",
    borderRadius: "15",
  },

  buttonsWrapper: {
    backgroundColor: "#9dfaab",
    marginTop: 15,
    height: "35%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  titleText: {
    justifyContent: "center",
    fontSize: 15
  }
});
