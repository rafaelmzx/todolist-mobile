import { StyleSheet } from "react-native";

export const todoItemStyles = StyleSheet.create({
    container: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title: {
      fontSize: 18,
    },
    completedTitle: {
      fontSize: 18,
      textDecorationLine: 'line-through',
    },
});