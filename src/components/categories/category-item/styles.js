import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/index";

export const styles = StyleSheet.create({
    containerItem: {

        borderRadius: 10,
        margin: 7,
        height: 120,
    },
    item: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 10,
        textAlign: "center",
    },

    title: {
        fontFamily: "Lato-Bold",
    }


})
