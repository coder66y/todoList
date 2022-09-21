import React, {useState} from 'react';
import Footer from './component/Footer';
import Main from './component/Main';
import Header from './component/Header';
import './App.less';
import { message } from 'antd';
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '睡觉',
      completed: false,
    },
    {
      id: 2,
      content: '吃饭',
      completed: true,
    },
  ]);
  const [filterType, setFilterType] = useState('all')

  // 添加待办项
  const addTodo = (todo) => {
    const flag = todos.some(item => item.content === todo );
    if (flag) {
      message.warn('请不要添加重复项');
    } else {
      let newTodo = {
        id: Math.round(Math.random() * 10),
        content: todo,
        completed: false
      };
      setTodos([
        ...todos, newTodo
      ]);
      message.success('添加成功');
    }
  }
  // 更改待办项的选择
  function changeCom(item) {
    // console.log(item);
    let newTodos = [...todos];
    newTodos.map((todo) => {
      if(todo === item) {
        return item.completed = !item.completed;
      }
      return null;
    })
    setTodos([
      ...newTodos
    ])
  }

  // 移除待办项
  function removeTodo(item) {
    let newTodos = todos.filter((todo) => {
      return todo !== item;
    })
    setTodos([
      ...newTodos
    ])
  }

  // 删除全部已完成
  function removeAll() {
    let newTodos = todos.filter((item) => {
      return !item.completed;
    })
    setTodos([
      ...newTodos
    ])
  }

  // 处理分类展示
  function showHandler(type) {
    setFilterType(type);
  }
  let todo = todos.reduce((count, item) => (count + (item.completed ? 0 : 1)), 0);
  let done = todos.reduce((count, item) => (count + (item.completed ? 1 : 0)), 0);
  let filterTodos = todos.filter((item) => {
    switch(filterType) {
      case 'completed':
        return item.completed;
      case 'unCompleted':
        return !item.completed;
      default:
        return item;
    }
  })
  return (
    <div className="app">
      <Header
        addTodo={addTodo}
      />
      <Main
        todos={filterTodos}
        removeTodo={removeTodo}
        changeCom={changeCom}
      />
      <div className='footer'>
        <Footer 
          todo={todo}
          done={done}
          removeAll={removeAll}
          showHandler={showHandler}
          filterType={filterType}
        />
      </div>
    </div>
  );
}

export default App;
