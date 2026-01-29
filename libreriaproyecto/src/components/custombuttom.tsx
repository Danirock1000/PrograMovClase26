import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface customButtomProps{
    title: string;
    onClick: () => void;
}

export default function CustomButtom (
    {title, onClick}: customButtomProps
) {

    return(
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

container: {
    backgroundColor: "#2e4566",
    width: "80%",
    borderWidth: 2,
    borderRadius: 8
}

});