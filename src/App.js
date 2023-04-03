import React from 'react';
import Container from 'react-bootstrap/Container';
import MyForm from './Form';
import List from './List';

function App() {
    return (
      <div className="App">
      <Container className='mt-3'> 
      <MyForm/>
      <List/>
      </Container>
      </div>
    );
}

export default App;
