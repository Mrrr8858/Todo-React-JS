import React from 'react';
import { Tab, ListGroup } from 'react-bootstrap';
import TopInList from './TopInList';
import Task from './Task';

function ToDoListOne(props) {
    return (
        <Tab eventKey={props.id} id={props.id} title={props.ListName}>
            <TopInList ListName1={props.ListName} id={props.id}/>
            <ListGroup className="p-0">
                {
                    props.toDoPage.lists.map((value) => {
                        return <Task Name={value.items.name} Date={value.items.createDateTime} Description={value.items.description} key={value.id} />
                    })
                }
                {/* <Task Priority={DataToDo.ToDo1.ToDoPriority} Name={DataToDo.ToDo1.ToDoName} Date={DataToDo.ToDo1.ToDoDate} Description={DataToDo.ToDo1.ToDoDescription} /> */}
            </ListGroup>
        </Tab>
    );
}

export default ToDoListOne;