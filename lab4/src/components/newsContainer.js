import { connect } from "react-redux";
import React from "react";
import NewsList from "./NewsList";
import { loadNewsThunkCreator } from "../redusers/news-reduser";

class MiddleNewsComponent extends React.Component{
    componentDidMount(){
        this.props.loadNewsThunkCreator();
    }
    render(){
        return (<NewsList {...this.props}/>)
    }
}

function mapStateToProps(state){
    return { newsPage : state.newsPage };
}

const NewsContainer = connect(mapStateToProps, {loadNewsThunkCreator}) (MiddleNewsComponent)

export default NewsContainer;