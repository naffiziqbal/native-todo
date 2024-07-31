import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = () => {
    if (todo.trim().length > 0) {
      const newTodos = [...todos, { id: Date.now().toString(), text: todo }];
      setTodos(newTodos);
      saveTodos(newTodos);
      setTodo("");
      setShowInput(false);
    }
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInput
        addTodo={addTodo}
        setTodo={setTodo}
        todo={todo}
        showInput={showInput}
        setShowInput={setShowInput}
      />
      <TodoItems todos={todos} removeTodo={removeTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    height: "100%",
    position: "relative",
  },
});

export default Todo;
