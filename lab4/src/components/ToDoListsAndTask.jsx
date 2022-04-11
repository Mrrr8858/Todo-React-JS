import React from 'react';
import { Tabs,  Card, Tab, ListGroup  } from 'react-bootstrap';
import TopInList from './TopInList';
import Task from './Task';
/*import CompletedTask from './CompletedTask'; 
import ToDoListOne from './ToDoListOne';*/

class Lists extends React.Component {
    render() {
        return (
            <Card className="mt-3">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="nav-fill pt-3 px-2 d-flex justify-content-between bg-light border rounded-top">
                    {
                        this.props.toDoLists.map((value) => {
                            return <Tab eventKey={value.id} id={value.id} title={value.name}>
                            <TopInList ListName1={value.name} id={value.id}/>
                            <ListGroup className="p-0">
                                {
                                    value.items.map((task) => {
                                        return <Task Name={task.name} Date={getFormattedDate(task.createDateTime)} Description={task.description}
                                         key={task.id} id={task.id} ownerId={value.ownerId} isDone={task.isDone} idList={value.id} Priority={task.priority}/>
                                    })
                                }
                            </ListGroup>
                        </Tab>
                        })
                    }
                </Tabs>
            </Card>
        );
    }
}

function getFormattedDate(datetime) {
    var date = new Date(datetime);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '.' + month + '.' + year;
  }
  
  
export default Lists;

