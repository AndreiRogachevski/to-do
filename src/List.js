import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import fetchList from './API/fetchList';

export default function List() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList())
    // fetch('https://dummyjson.com/todos?limit=4')
    //   .then((res) => res.json())
    //   .then((data) => setList(data.todos));
  }, []);
  return (
    <Row>
      <ListGroup as={Col} lg={{ span: 8, offset: 2 }}>
        {list.map((item) => (
          <ListGroup.Item key={item.id}>{item.todo}</ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  );
}
