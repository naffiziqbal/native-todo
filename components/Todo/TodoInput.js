import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TodoInput({
  todo,
  setTodo,
  addTodo,
  showInput,
  setShowInput,
}) {
  return (
    <View style={styles.container}>
      {showInput && (
        <Modal
          animationType="slide"
          style={styles.inputContainer}
          transparent={true}
        >
          <View style={styles.modalContent}>
            <View style={styles.todoHeader}>
              <TouchableOpacity onPress={addTodo}>
                <Text style={styles.headerText}>Add</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>New Todo</Text>
              <TouchableOpacity onPress={() => setShowInput(false)}>
                <Text style={styles.headerText}>X</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              inputMode="text"
              placeholder="Enter your todo"
              placeholderTextColor={"white"}
              style={styles.input}
              defaultValue={todo}
              onChangeText={setTodo}
            />
          </View>
        </Modal>
      )}
      {!showInput && (
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setShowInput(true)}
        >
          <Text>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
    zIndex: 1,
  },
  inputContainer: {
    backgroundColor: "red",
  },
  input: {
    color: "white",
    fontSize: 18,
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "100%",
  },
  inputButton: {
    backgroundColor: "skyblue",
    padding: 10,
    width: 50,
    borderRadius: 200,
    justifyContent: "center",
    height: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  todoHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  headerText: {
    color: "white",
    fontSize: 18,
  },
});
