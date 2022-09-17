import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  // 리액트 패키지에 정의된 타입(@types/react)
  // React.FC - 해당 함수가 함수형 컴포넌트로 기능함을 의미
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.list}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodos={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
