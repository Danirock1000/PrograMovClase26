import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface customButtomProps{
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
}

export default function CustomButtom ({title, onClick, variant = "primary"}: customButtomProps) {
        const styles = getStyles(variant);

    return(
        
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const getStyles = (variant: 'primary' | 'secondary') => StyleSheet.create({

container: {
    backgroundColor: variant === "primary" ? "#2e4566": "white",
    width: "80%",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center'
},
text: {
    color: variant === "primary" ? "white": "blue",
    fontSize: 18,
    fontWeight: "500"
}

});