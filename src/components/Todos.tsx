import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // 리액트 패키지에 정의된 타입(@types/react)
  // React.FC - 해당 함수가 함수형 컴포넌트로 기능함을 의미
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
