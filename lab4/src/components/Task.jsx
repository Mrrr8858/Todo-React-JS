import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from 'react-bootstrap';
import { titleRef, descriptionRef, priorityRef, listRef, idRef } from './ToDoElementCreate';
import { useDispatch } from 'react-redux';
import { deleteToDoElemThunkCreator, checkToDoElemThunkCreator } from '../redusers/toDo-reduser';

function getPriority(id) {
    switch (id) {
        case 1:
            return "light";
        case 2:
            return "warning";
        case 3:
            return "danger";
        default:
            return "light"
    }
}


function Task(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteToDoElemThunkCreator(props.id, props.ownerId));
    }
    const checkClick = () => {
        dispatch(checkToDoElemThunkCreator(props.id, props.ownerId));
    }

    const editClick = () => {
        titleRef.current.value = props.Name;
        descriptionRef.current.value = props.Description
        priorityRef.current.value = +props.Priority
        listRef.current.value = props.idList
        idRef.id = props.id
    }

    if (props.isDone) {
        return (
            <ListGroup.Item className="p-0" id={props.id}>
                <div>
                    <div class="d-flex flex-row w-100 border-bottom">
                        <div class={"bg-" + getPriority(props.Priority) + " border border-" + getPriority(props.Priority) + " p-0 mr-2 rounded-left"}></div>
                        <div class=" align-items-center justify-content-between p-2 row w-100">
                            <div class="col ">
                                <div class="d-flex flex-row flex-wrap">
                                    <p class="h5 text-uppercase m-2">{props.Name}</p>
                                    <p class="TextDate h5 text-uppercase text-secondary m-2"> {props.Date}</p>
                                </div>
                                <div class="ElementBody text-start m-2">
                                    {props.Description}
                                </div>
                            </div>

                            <div class=" m-1 col-md-3 col-12 d-flex justify-content-end" >
                                <FontAwesomeIcon icon={faCheck} className="text-success mt-1 fa-2x" />
                            </div>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        )
    }
    else {
        return (
            <ListGroup.Item className="p-0" id={props.id}>
                <div>
                    <div class="d-flex flex-row w-100 border-bottom">
                        <div class={"bg-" + getPriority(props.Priority) + " border border-" + getPriority(props.Priority) + " p-0 mr-2 rounded-left"}></div>
                        <div class=" align-items-center justify-content-between p-2 row w-100">
                            <div class="col ">
                                <div class="d-flex flex-row flex-wrap">
                                    <p class="h5 text-uppercase m-2">{props.Name}</p>
                                    <p class="TextDate h5 text-uppercase text-secondary m-2"> {props.Date}</p>
                                </div>
                                <div class="ElementBody text-start m-2">
                                    {props.Description}
                                </div>
                            </div>

                            <div class=" btn-group d-flex col-12 col-md-3 " role="group" aria-label="Basic example">
                                <div class="btn border-success text-success" onClick={checkClick}>
                                    <FontAwesomeIcon icon={faCheck} className="text-success mt-1" />
                                </div>
                                <div data-toggle="modal" data-target="#staticBackdrop" type="button" onClick={editClick} class="btn border-warning text-warning">
                                    <FontAwesomeIcon icon={faPen} className="text-warning  mt-1" />
                                </div>
                                <div class="btn border-danger text-danger" onClick={handleClick}>
                                    <FontAwesomeIcon icon={faTrash} className="text-danger  mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        );
    }
}

export default Task;