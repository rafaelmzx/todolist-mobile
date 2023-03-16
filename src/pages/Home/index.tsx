import React, { useState } from 'react';

import { SafeAreaView, View, Button, TextInput } from 'react-native';

import TodoList from '../../components/TodoList/TodoList';
import { TodoItemProps } from '../../components/TodoItem/TodoItem';

import { homeStyles } from './style';

export default function Home() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    const trimmedTitle = newTodoTitle.trim(); // Remove os espaços extras do título da tarefa
    const existingTodo = todos.find((todo) => todo.title === trimmedTitle);
    if (existingTodo) {
      return;
    }
  
    const newTodo: TodoItemProps = {
      title: trimmedTitle,
      completed: false,
      onPress: function (): void {
        throw new Error('Função não encontrada');
      },
      onDeletePress: undefined
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
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

  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.filterContainer}>
        <Button
          title={showCompleted ? 'Mostrar pendentes' : 'Mostrar concluídas'}
          onPress={() => setShowCompleted(!showCompleted)}
        />
      </View>
      <TodoList todos={todos} onCompletedPress={handleCompletedPress} onDeletePress={handleDeletePress} showCompleted={showCompleted} />
      <View style={homeStyles.inputContainer}>
        <TextInput
          style={homeStyles.input}
          placeholder="Insira o nome da tarefa"
          value={newTodoTitle}
          onChangeText={setNewTodoTitle}
        />
        <Button title="Salvar" onPress={handleAddTodo} />
      </View>
    </SafeAreaView>
  );
}
;
