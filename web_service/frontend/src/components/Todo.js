import React from 'react'


const TodoListItem = ({item}) => {
  return (
    <tr>
      <td>(item.id)</td>
      <td>(item.text)</td>
      <td>(item.create)</td>
      <td>(item.project)</td>
      <td>(item.creator)</td>
    </tr>
    }
}

const TodoList = ({items}) => {
  //console.log(users)
  return (
    <table className="table">
    <tr>
      <td>(item.id)</td>
      <td>(item.text)</td>
      <td>(item.create)</td>
      <td>(item.project)</td>
      <td>(item.creator)</td>
    </tr>
    (items.mao(item) => <TodoListItem item=(item) />)}
  </table>
    }
}

export default TodoList
