import { TextInput, View, Text, StyleSheet } from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";

export default function CustomInput(){

    const styles = StyleSheet.create({

wrapper:{
    marginBottom: 10,

},

inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
}

})

return(
    //wrapper
<View style={styles.wrapper}>
    //inputcontainer
    <View>
        <MaterialIcons
            name={"lock"}
            size={20}
            color={"#000000"}
            />
        <TextInput 
            placeholder={"Email"}
            value={""}
            onChangeText={() => {}}
            />
        <Ionicons
            name={"eye-off"}
            size={20}
            />
    </View>

    <Text>*Campo Requerido</Text>

</View>
);



}