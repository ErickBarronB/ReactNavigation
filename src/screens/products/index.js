import { Button, Text, View } from "react-native";

import react from "react";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {
    return (
        <View style={styles.container}>

            <Text> Products </Text>
            <Button title="Ir a detalle de productos"  onPress={() => navigation.navigate("Product Detail")} />

        </View>
    )
}

export default Products;