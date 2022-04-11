/* import { connect } from "react-redux";
import React from "react";
import { loadToDoThunkCreator } from "../redusers/toDo-reduser";
import ToDoList from "../ToDoList";
import Task from "./Task";

class MiddleNewsComponent extends React.Component{
    componentDidMount(){
        this.props.loadToDoThunkCreator();
    }
    render(){
        return (<Task {...this.props}/>)
    }
}

function mapStateToProps(state){
    return { toDoPage : state.toDoPage };
}

const ToDoTaskContainer = connect(mapStateToProps, {loadToDoThunkCreator}) (MiddleNewsComponent)

export default ToDoTaskContainer; */