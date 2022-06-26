import { Categories, ProductDetail, Products } from "./screens/index";

import AppNavigator from "./navigation";
import { View } from "react-native"
import { styles } from "./styles";

export default function Root() {

    return (
    <View style={styles.container}>
        <AppNavigator/>
    </View>
);
}
