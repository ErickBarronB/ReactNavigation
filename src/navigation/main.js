import { CategoriesScreen, ProductDetailScreen, ProductExtraDetailsScreen, ProductsScreen } from "../screens/index";
import { isAndroid, isIOS } from "../constants/utils/index";

import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../constants/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { platform } from "react-native";
import react from "react";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
                backgroundColor: isIOS ? colors.primary : colors.secondary,
            },
            headerTintColor: isAndroid ? colors.white : colors.black,
            headerTitleStyle: {
                fontFamily: "Lato-Bold",
            }
        }}
        >
            <Stack.Screen
            name="Categories"
            component={CategoriesScreen}


            />
            <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={({ route }) => ({
                title: route.params.name,
            })}

            />
            <Stack.Screen
            name="Product Detail"
            component={ProductDetailScreen}
            options={({ route }) => ({
                title: route.params.name,
            })}

            />
            <Stack.Screen
            name="Product Extra Details"
            component={ProductExtraDetailsScreen}

            />
        </Stack.Navigator>
    )
}

export default MainNavigator;