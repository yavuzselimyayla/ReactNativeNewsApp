/* eslint-disable react/prop-types */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';

const Article = (props) => {

const goToSource = () => {
  console.log(props.url)
  WebBrowser.openBrowserAsync(props.url,{'windowFeatures':''});
}

  return (
    <Pressable style={styles.container} onPress={goToSource}>
      <Image
        style={styles.image}
        source={{
          uri: props.urlToImage
        }}
      />

      <View style={{ padding: 10 }}>
        {/* Title */}
        <Text style={styles.title}>{props.title}</Text>

        {/* Description */}
        <Text style={styles.description} numberOfLines={3}>{props.description}</Text>

        <View style={styles.data}>
          <Text style={styles.heading}>
            Yazar: <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>{props.publishedAt}</Text>
        </View>

        {/* Source */}
        <View style={{ marginTop: 2 }}>
          <Text style={styles.heading}>
            Kaynak: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "90%",
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: { height: 5, width: 5 },
    backgroundColor: "#fff",
    marginTop: 20
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "regular",
    marginTop: 10,
  },

  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "regular",
    marginTop: 10,
  },
  author: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
    color: "#ef476f",
    fontSize: 15,
  },
  source: {
    fontWeight: "bold",
    color: "#ef476f",
    fontSize: 18,
  },
});

export default Article;
