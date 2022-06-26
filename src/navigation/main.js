import { Categories, ProductDetail, ProductExtraDetails, Products } from "../screens/index";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Product Detail" component={ProductDetail}/>
            <Stack.Screen name="Product Extra Details" component={ProductExtraDetails}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;