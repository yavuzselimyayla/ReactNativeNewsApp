import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Article from "../components/Article.js";
import { FlatList } from "react-native-web";


const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [articles, setArticles] = useState([]);

    const searchArticles = () => {
        axios.get(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=be0f123b527d45f7b02c94dad00102e8",
            {
                params: {
                    category:"technology",
                    q: searchText
                },
            },
        )
            .then((response) => {
                // handle success
                console.log(response.data.articles);
                setArticles(response.data.articles);
                console.log("Fetched news");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
            });
    };
    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText}
            onSubmit={searchArticles} />
            <FlatList
                data={articles}
                renderItem={({ item }) =>
                    <Article
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        publishedAt={item.publishedAt}
                        sourceName={item.source.name}
                    />}
                keyExtractor={(item) => item.url}
            />
        </View>
    )
};
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
});
