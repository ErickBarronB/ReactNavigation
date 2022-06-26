import MainNavigator from "./main";
import { NavigationContainer } from "@react-navigation/native"
import react from "react";

const AppNavigator = () => {
return (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
)
}

export default AppNavigator;