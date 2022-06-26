import { Button, Text, View } from "react-native";

import react from "react";
import { styles } from "./styles";

const Categories = ({ navigation, route }) => {
    return (
        <View style={styles.container}>

            <Text> Categories </Text>
            <Button title="Ir a Productos" onPress={() => navigation.navigate("Products")} />

        </View>
    )
}

export default Categories;