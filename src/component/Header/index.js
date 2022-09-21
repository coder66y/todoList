import React from 'react';
import { Input, message } from 'antd';

export default function index(props) {
  const { addTodo } = props;
  const onInput = (e) => {
    if (e.target.value.trim() === '') {
      return message.warn('请添加非空待办项');
    }
    addTodo(e.target.value.trim());
  }
  return (
    <div>
      <h1 className='primaryColor'>react-todo-list</h1>
      <Input placeholder='请添加属于你的待办项' onPressEnter={onInput} />
    </div>
  )
}
