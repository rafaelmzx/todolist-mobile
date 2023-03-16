
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { todoItemStyles } from './style';

export interface TodoItemProps {
  title: string;
  completed: boolean;
  onPress: () => void;
  onDeletePress: any
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed, onPress }) => {
    return (
      <View style={todoItemStyles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={completed ? todoItemStyles.completedTitle : todoItemStyles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
};
  
  
export default TodoItem;
   