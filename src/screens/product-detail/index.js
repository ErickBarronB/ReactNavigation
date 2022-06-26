import { Button, Text, View } from "react-native";

import react from "react";
import { styles } from "./styles";

const ProductDetail = ({ navigation, route }) => {
    return (
        <View style={styles.container}>

            <Text> Product Details</Text>
            <Button title="Ver mas Detalles" onPress={() => navigation.navigate("Product Extra Details")} />

        </View>
    )
}

export default ProductDetail;