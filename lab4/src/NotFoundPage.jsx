import React from 'react';
import Attention from './components/TextInBlock';

class NotFound extends React.Component {
    render() {
        return (
            <div className="my-3">
                <Attention text="Страница не найдена" />
            </div>
        );
    }
}

export default NotFound;