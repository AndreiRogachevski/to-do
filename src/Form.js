import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

export default function MyForm() {
  const [value, setValue] = useState('')
  function handleSubmit() {
    
  }
  return <Form onSubmit={handleSubmit()}>
  <Form.Group as={Row} className="mb-3 justify-content-md-center g-2">
    <FloatingLabel as={Col} sm={6} controlId="floatingInput" label="Новая запись" >
    <Form.Control type="text" placeholder="Новая запись" name="name" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </FloatingLabel>
  <Col sm={'auto'}>
  <Button variant="primary" type='submit' className='h-100'>Создать</Button>
  </Col>
  </Form.Group>
  </Form>
};
