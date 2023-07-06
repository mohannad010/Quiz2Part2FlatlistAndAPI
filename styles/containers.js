import { StyleSheet } from "react-native";

const containers = StyleSheet.create({
  pageContainer: {
    margin: 10,
    flexDirection: "column",
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  SearchContainer: {
    flex: 0.5,
    flexDirection: "row",
  },
  searchTextContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  MenuContainer: {
    flex: 10,
  },
  menuItemContainer: {
    backgroundColor: "bisque",
    borderWidth: 3,
    flexDirection: "row",
    marginBottom: 10,
    height: 100,
  },
  textMenuItemContainer: {
    flex: 3,
  },
  imageMenuItemContainer: {
    flex: 1,
  },
});

export default containers;
