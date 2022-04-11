import React from 'react';
import DeleteList from './DeleteList';

class TopInList extends React.Component {

    render() {
        return (
            <div className="mt-3">
                <div class="d-flex justify-content-between p-3">
                    <div class="h4">{this.props.ListName1}</div>
                    <DeleteList ButtonID="1" id={this.props.id}/>
                </div>
            </div>
        );
    }
}

export default TopInList;