import { newsApi } from "../API/newsApi";

const LOAD_NEWS = "LOAD_NEWS";

let initialState = {
    news : []
}

const newsReduser = (state = initialState, action) => { 
    let newState = {...state};
    switch(action.type){
        case LOAD_NEWS:
            newState.news = action.news;
            return newState;
        default:
            return newState;
    }
}

export function loadNewsActionCreator(news){
    return {type: LOAD_NEWS, news : news}
}


export function loadNewsThunkCreator(){
    return (dispatch) => {
        newsApi.getNews().then(data => {
            dispatch(loadNewsActionCreator(data));
        })
    }
}
export function likesNewsThunkCreator(id){
    return (dispatch) => {
        newsApi.postLikes(id).then(data => {
            dispatch(loadNewsThunkCreator(data));
        })
    }
}


export default newsReduser;