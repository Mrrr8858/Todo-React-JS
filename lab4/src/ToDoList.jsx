import React from 'react';
import Info from './components/InfoPrioritets';
import ListCreate from './components/ToDoListCreate';
import ElementCreate from './components/ToDoElementCreate';
/* import ToDoListContainer from './components/toDoListContainer'; */
import Lists from './components/ToDoListsAndTask'

let DataList = {
  ListName1: "aaaa",
  ListName2: "help"
}

class ToDoList extends React.Component {
  render() {
    return (
      <div className="my-3">
        <Info/>
        <ListCreate/>
        <ElementCreate toDoLists={this.props.toDoPage.lists}/>
        <Lists toDoLists={this.props.toDoPage.lists}/>
      </div>
    );
  }
}

export default ToDoList;