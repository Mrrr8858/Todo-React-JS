import React from 'react';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {createToDoListThunkCreator} from '../redusers/toDo-reduser';
 

let marginfooter = {
    marginLeft: '14px',
    marginTop: '5px',
    marginBottom: '5px'
}

function ListCreate() {

    const titleRef = React.createRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createToDoListThunkCreator({ name: titleRef.current.value }))
    }

    return (
        <div className="mt-3">
            <Card className="mb-2 text-start">
                <Form onSubmit={handleSubmit}>
                    <Card.Header>
                        <div class="my-auto text-uppercase p-1">Создать список ToDo </div>
                    </Card.Header>

                    <Card.Body className="m-0 p-4 bg-light">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Название</Form.Label>
                            <Form.Control ref={titleRef} required />
                        </Form.Group>
                    </Card.Body>

                    <Card.Footer className="p-2">
                        <Button style={marginfooter} variant="secondary" type="reset">
                            Очистить
                        </Button>{' '}
                        <Button variant="success" type="submit">
                            Создать
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
}

export default ListCreate;