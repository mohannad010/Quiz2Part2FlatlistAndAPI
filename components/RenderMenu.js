import { View, Text, Image } from "react-native";
import containers from "../styles/containers";

const RenderMenu = ({ item }) => {
  return (
    <View style={containers.menuItemContainer}>
      <Text style={containers.textMenuItemContainer}>{item.strMeal}</Text>
      <Image
        style={containers.imageMenuItemContainer}
        source={item.strMealThumb}
      />
    </View>
  );
};

export default RenderMenu;
