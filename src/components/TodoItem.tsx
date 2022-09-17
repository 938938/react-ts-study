import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveTodos: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodos}>
      {props.text}
    </li>
  );
};

export default TodoItem;
