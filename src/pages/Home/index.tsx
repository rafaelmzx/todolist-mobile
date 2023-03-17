import React, { useState } from "react";

import { SafeAreaView, View, Button, TextInput, Text, TouchableOpacity } from "react-native";

import TodoList from "../../components/TodoList/TodoList";
import { TodoItemProps } from "../../components/TodoItem/TodoItem";
import TaskCount from "../../components/TodoCount";

import { homeStyles } from "./style";

import { BsCardChecklist } from 'react-icons/Bs'

export default function Home() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    const trimmedTitle: string = newTodoTitle.trim(); // Remove os espaços extras do título da tarefa

    if (trimmedTitle.length == 0) return;

    const existingTodo = todos.find((todo) => {
      return todo.title === trimmedTitle;
    });

    if (existingTodo) return;

    const newTodo: TodoItemProps = {
      title: trimmedTitle,
      completed: false,
      onPress: function (): void {
        throw new Error("Função não encontrada");
      },
      onDeletePress: undefined,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };

  const handleCompletedPress = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeletePress = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  function countTasks(tasks: TodoItemProps[]) {
    const numTotalTasks = tasks.length;
    const numCompletedTasks = tasks.filter((task) => task.completed).length;
    const numIncompleteTasks = numTotalTasks - numCompletedTasks;
    return { numTotalTasks, numCompletedTasks, numIncompleteTasks };
  }

  const { numTotalTasks, numCompletedTasks, numIncompleteTasks } =
    countTasks(todos);

  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.filterContainer}>
        <View>
          <Text style={homeStyles.headerLogo}>TodoCrazy</Text>
        </View>
          <View>
            <TaskCount tasks={todos} />
          </View>
        <View style={homeStyles.inputContainer}>
          <TextInput
            style={homeStyles.input}
            placeholder="Insira o nome da tarefa"
            value={newTodoTitle}
            onChangeText={setNewTodoTitle}
          />
          <TouchableOpacity style={homeStyles.buttonSearch} onPress={handleAddTodo}>
            <Text><BsCardChecklist size={24} style={{justifyItems: 'center'}}></BsCardChecklist></Text>
          </TouchableOpacity>
        </View>
        <View>
        <TodoList
          todos={todos}
          onCompletedPress={handleCompletedPress}
          onDeletePress={handleDeletePress}
          showCompleted={showCompleted}
        />

        </View>
        <View >
          <Button
            title={showCompleted ? "Mostrar pendentes" : "Mostrar concluídas"}
            onPress={() => setShowCompleted(!showCompleted)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
