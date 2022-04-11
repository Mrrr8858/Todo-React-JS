import { connect } from "react-redux";
import React from "react";
import { loadToDoThunkCreator } from "../redusers/toDo-reduser";
import ToDoList from "../ToDoList";

class MiddleNewsComponent extends React.Component{
    componentDidMount(){
        this.props.loadToDoThunkCreator();
    }
    render(){
        return (<ToDoList {...this.props}/>)
    }
}

function mapStateToProps(state){
    return { toDoPage : state.toDoPage };
}

const ToDoListContainer = connect(mapStateToProps, {loadToDoThunkCreator}) (MiddleNewsComponent)

export default ToDoListContainer;