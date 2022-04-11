import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {deleteToDoListThunkCreator} from '../redusers/toDo-reduser'; 


function DeleteList(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteToDoListThunkCreator(props.id));
    }

    return (
        <Button id={props.id} className="bg-danger border-0" onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} className="mx-2" />
            Удалить список
        </Button>
    );
}

export default DeleteList;