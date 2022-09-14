import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('ABC'), new Todo('CDE')];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
