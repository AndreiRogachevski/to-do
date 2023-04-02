import React,{ useEffect, useState } from "react"

export default function List() {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => setList(data.todos))
  }, [])
  return <ul>{
    list.map(item => <li key={item.id}>{item.todo}</li>)
  }</ul>
};
