import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },

    detailContainer: {
        backgroundColor: colors.secondary,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        shadowColor: colors.black,
        shadowOffset: { width: 5, height: 5},
        elevation: 4,
    },

    title: {
        fontFamily: "Lato-Bold",
        fontSize: 20,

    },

    descriotion: {
        fontFamily: "Lato-Regular",
        fontSize: 8,
    }


})