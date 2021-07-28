const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'todos/INSERT'; // 새로운 항목 등록
const TOGGLE = 'todos/TOGGLE'; // 항목 체크 상태를 변경
const REMOVE = 'todos/REMOVE'; // 항목을 제거

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3; // insert가 호출될 때마다 1씩 더해짐
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'Redux Basic',
      done: true,
    },
    {
      id: 2,
      text: 'React with Redux',
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todo: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
