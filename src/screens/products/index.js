import { Button, Text, View } from "react-native";

import { Products } from "../../components/index";
import { products } from "../../constants/data/index";
import react from "react";
import { styles } from "./styles";

const ProductsScreen = ({ navigation, route }) => {
    const filterProducts = products.filter(item => item.categoryId == route.params.categoryId)
    const onHandlerSelectedProduct = (item) => {
        navigation.navigate("Product Detail", {
            product: item,
            name: item.title,
         })
    }
    return (
        <View style={styles.container}>
            <Products
                data={filterProducts}
                onSelected={onHandlerSelectedProduct}/>

        </View>
    )
}

export default ProductsScreen;