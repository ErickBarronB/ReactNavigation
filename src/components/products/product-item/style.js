import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes";

export const styles = StyleSheet.create ({
    containerItem: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    item: {
    },
    title: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
    },
    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailText: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
})
