import { TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { useState } from "react";

    type Props = {
        placeholder: string,
        onChange: () => void;
        value: string,
        typeInput: 'email' | 'password'
    }

export default function CustomInput({placeholder, onChange, value, typeInput}: Props){
//uso de variable:
//        [nombre de variable, funcion] = useState(valor inicial)
    const [isSecureText, setIsSecureText] = useState(isSecureText === 'password');

    const styles = StyleSheet.create({

    wrapper:{
        marginBottom: 20,
        width: "100%",
        backgroundColor: "grey",


},

    inputContainer:{
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "black",
        paddingHorizontal: 13,
        backgroundColor: "yellow",
        justifyContent: "space-between"

}

})

return(
    //wrapper
<View style={styles.wrapper}>
    
    <View style={styles.inputContainer}>
        <MaterialIcons
            name={"lock"}
            size={20}
            color={"#000000"}
            />
        <TextInput 
            placeholder={placeholder}
            value={""}
            onChangeText={onChange}
            secureTextEntry={isSecureText}
            
            />
            <TouchableOpacity
                onPress={()=>{
                    
                }}>
                <Ionicons
                    name={"eye-off"}
                    size={20}
            />
            </TouchableOpacity>
        
    </View>

<Text>*Campo Requerido</Text>
</View>

);



}