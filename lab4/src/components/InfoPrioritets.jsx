import React from 'react';
import { Card } from 'react-bootstrap';
class Info extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <Card className="p-2 pt-3 text-start">
                    <h5 class="font-weight-bold p-2">Приоритеты элементов ToDo:</h5>
                    <div class="text-uppercase p-2 font-weight-bold ">
                        <span class="border rounded p-2 m-1 bg-light border-dark">обычный</span>
                        <span class="border rounded p-2 m-1 bg-warning border-dark">важный</span>
                        <span class="border rounded p-2 m-1 bg-danger text-white border-dark">критичный</span>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Info;