import { todoApi } from "../API/toDoApi";

const LOAD_TODO = "LOAD_TODO";


let initialState = {
    lists: []
}

export const toDoReduser = (state = initialState, action) => {
    let toDoState = { ...state };
    switch (action.type) {
        case LOAD_TODO:
            toDoState.lists = action.lists;
            return toDoState;
        default:
            return toDoState;
    }
}

export function loadToDoActionCreator(lists) {
    return { type: LOAD_TODO, lists: lists }
}


export function loadToDoThunkCreator() {
    return (dispatch) => {
        todoApi.getToDoLists().then((data) => {
            dispatch(loadToDoActionCreator(data));
        })
    }
}

export function deleteToDoListThunkCreator(id) {
    return (dispatch) => {
        todoApi.deleteList({ id: id }).then((data) => {
            dispatch(loadToDoThunkCreator());
        })
    }
}
export function deleteToDoElemThunkCreator(id, ownerId) {
    return (dispatch) => {
        todoApi.deleteTask({
            ownerId: ownerId,
            id: id
        })
        .then((data) => {
            dispatch(loadToDoThunkCreator());
        })
    }
}
export function checkToDoElemThunkCreator(id, ownerId) {
    return (dispatch) => {
        todoApi.checkTask({
            ownerId: ownerId,
            id: id
        })
        .then((data) => {
            dispatch(loadToDoThunkCreator());
        })
    }
}

export function createToDoElemThunkCreator(body) {
    return (dispatch) => {
        todoApi.createOrUpdateToDoTask(body)
        .then((data) => {
            dispatch(loadToDoThunkCreator());
        })
    }
}
export function createToDoListThunkCreator(body) {
    return (dispatch) => {
        todoApi.createOrUpdateToDoList(body)
        .then((data) => {
            dispatch(loadToDoThunkCreator());
        })
    }
}


