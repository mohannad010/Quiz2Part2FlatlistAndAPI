import React, { useState, useEffect } from "react";
import { Text, FlatList, View, Image, TextInput } from "react-native";
import texts from "./styles/texts";
import containers from "./styles/containers";
import RenderMenu from "./components/RenderMenu";

// returns an array with all the meals that match the search
const Search = (search, data) => {
  console.log(data);
};

const Exam3cStart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getMeals = async () => {
    if (search == null || search == "") {
      return {};
    }
    try {
      // end point API
      const url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + search;
      const response = await fetch(url);
      const json = await response.json();
      setData(json.meals);
      console.log("search inside getMeals: " + search);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, [search]);

  return (
    <View style={containers.pageContainer}>
      <Text style={[texts.header, containers.headerContainer]}>
        Meal Finder
      </Text>
      <View style={containers.SearchContainer}>
        <View style={containers.searchTextContainer}>
          <Text style={texts.searchText}>Main Ingrediant: </Text>
        </View>
        <TextInput
          style={[containers.searchComopnent, { flex: 5 }]}
          placeholder="(e.g., beef)"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            console.log("this is text: " + text);
            setSearch(text);
            console.log("This is search: " + search);
          }}
        ></TextInput>
      </View>
      <View style={containers.MenuContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.idMeal}
          renderItem={RenderMenu}
        />
      </View>
    </View>
  );
};

export default Exam3cStart;
