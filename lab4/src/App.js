import './App.css';
import React from 'react';
import Header from './components/Header';
import News from './News'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
/* import ToDoList from './ToDoList'; */
import NotFound from './NotFoundPage';
import ToDoListContainer from './components/toDoListContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<News />}></Route>
             <Route path="/todos" element={<ToDoListContainer/>}></Route>
             <Route path="*" element={<NotFound/>}></Route> 
          </Routes>
        </Container>
      </div>      
    </BrowserRouter>
  );
}

export default App;
