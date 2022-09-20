import { List, Checkbox, Button } from 'antd';
import React from 'react'

export default function index(props) {
  const { todos, changeCom, removeTodo } = props;
  return (
    <div>
      <List
        size="small"
        bordered
        dataSource={todos}
        renderItem={item => 
          <List.Item
            className='listItem'
          >
            <span>
              <Checkbox
                className='mr10'
                checked={item.completed}
                onChange={() => changeCom(item)}
              />
              {item.content}
            </span>
            <Button
              size='small'
              type="primary"
              onClick={() => removeTodo(item)}>
              X
            </Button>
          </List.Item>}
      />
    </div>
  )
}
