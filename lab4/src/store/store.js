import { createStore, combineReducers, applyMiddleware } from 'redux';
import newsReduser from '../redusers/news-reduser';
import {toDoReduser} from '../redusers/toDo-reduser';
import thunk from 'redux-thunk';

let redusers = combineReducers({
    newsPage : newsReduser,
    toDoPage : toDoReduser
})

let store = createStore(redusers, applyMiddleware(thunk));

export default store;