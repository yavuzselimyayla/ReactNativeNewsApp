import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import axios from "axios";
import Article from "../components/Article.js";

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=be0f123b527d45f7b02c94dad00102e8",
      {
        params: {
          category: "politics",
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

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
            url = {item.url}
          />}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
