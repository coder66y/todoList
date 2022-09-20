import React from 'react';
import { Button } from 'antd';
import styles from './index.module.less'

export default function index(props) {
  const { todo, done, filterType, showHandler, removeAll } = props;
  return (
    <div className={styles.root}>
      <Button size='small' type={filterType === 'completed' ? 'primary' : ''} onClick={() => showHandler('completed')}>已完成({done})</Button>
      <Button size='small' type={filterType === 'unCompleted' ? 'primary' : ''} onClick={() => showHandler('unCompleted')}>未完成({todo})</Button>
      <Button size='small' type={filterType === 'all' ? 'primary' : ''} onClick={() => showHandler('all')}>全部({done + todo})</Button>
      {
        done !== 0 ? <Button size='small' type='primary' onClick={() => removeAll()}>删除已完成</Button> : null
      }
  </div>
  )
}
