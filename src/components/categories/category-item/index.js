import { Text, View } from "react-native";

import { TouchableOpacity } from "react-native-web";
import { colors } from "../../../constants/themes";
import react from "react";
import { styles } from "./styles"

/* style={{ ...styles.item, backgroundColor: item.color}} NO FUNCIONA */

const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.containerItem}>
            <TouchableOpacity
            style={styles.item}
                onPress={() => onSelected(item)} >

            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem;

/* 3.06 */