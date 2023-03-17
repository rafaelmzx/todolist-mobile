import React from 'react';
import { Text } from 'react-native';
import { TodoItemProps } from '../TodoItem/TodoItem';
import { StyleSheet } from 'react-native';

interface TaskCountProps {
  tasks: TodoItemProps[];
}

function countTasks(tasks: TodoItemProps[]) {
  const numTotalTasks = tasks.length;
  const numCompletedTasks = tasks.filter(task => task.completed).length;
  const numIncompleteTasks = numTotalTasks - numCompletedTasks;
  return { numTotalTasks, numCompletedTasks, numIncompleteTasks };
}

export default function TaskCount({ tasks }: TaskCountProps) {
  const { numTotalTasks, numCompletedTasks, numIncompleteTasks } = countTasks(tasks);

  return (
    <Text style={Tasks.tasksText}>Tarefas pendentes: {numIncompleteTasks} Tarefas prontas: {numCompletedTasks}</Text>
  );
}


const Tasks = StyleSheet.create({
  tasksText:{
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold'
  }
})