import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from "react-native";

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Ara"
                placeholderTextColor="gray"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text) => props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        color: "#000"
    },
});
