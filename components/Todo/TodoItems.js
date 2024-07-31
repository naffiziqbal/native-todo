import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function TodoItems({ todos, removeTodo }) {
  return (
    <ScrollView style={styles.todoSection}>
      {todos.map((todo, index) => (
        <View style={styles.todoContainer} key={todo.id}>
          <Text style={styles.todoText}>
            {(index += 1)} {todo.text}
          </Text>
          <Button title="Remove" onPress={() => removeTodo(todo.id)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todoSection: {
    flex: 1,
    marginTop: 10,
    height: "100%",
    marginBottom: 40,
  },

  todoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#f9f9f9",
    height: 110,
  },
  todoText: {
    fontSize: 18,
    color: "black",
  },
});
