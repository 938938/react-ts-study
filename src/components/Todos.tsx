import React from 'react';

const Todos: React.FC<{ items: string[] }> = (props) => {
  // 리액트 패키지에 정의된 타입(@types/react)
  // React.FC - 해당 함수가 함수형 컴포넌트로 기능함을 의미
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;