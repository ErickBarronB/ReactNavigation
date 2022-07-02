import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const ProductItem = ({ item, onSelected}) => {
    return (
        <TouchableOpacity style={styles.containerItem}
        onPress={() => onSelected(item)}>
        
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.detailContaier}>
            <Text style={styles.detailText}>Price: {item.price}</Text>
            <Text style={styles.detailText}>Weight: {item.weight}</Text>
        </View>

        </TouchableOpacity>
    )
}


export default ProductItem;