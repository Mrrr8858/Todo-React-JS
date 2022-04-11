import React from 'react';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {createToDoElemThunkCreator}  from '../redusers/toDo-reduser'; 
import { useDispatch } from 'react-redux';


let marginForfooter = {
    marginLeft: '14px',
    marginTop: '5px',
    marginBottom: '5px'
}
const titleRef = React.createRef();
const descriptionRef = React.createRef();
const priorityRef = React.createRef();
const listRef = React.createRef();
const idRef = { id: null};

function ElementCreate(props) {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createToDoElemThunkCreator({
            id: idRef.id,
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            priority: +priorityRef.current.value,
            listId: +listRef.current.value
        }))
    }
    return (
        <Card className="mb-3 text-start">
            <Form onSubmit={handleSubmit}>
                <Card.Header>
                    <div class="my-auto text-uppercase p-1">Создать элемент ToDo </div>
                </Card.Header>

                <Card.Body className="m-0 p-4 bg-light">

                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control type="text" ref={titleRef} required />
                        <div class="d-flex justify-content-between mb-3 mt-3 row">
                            <div class="col-lg-6 col-sm-12">
                                <Form.Label>Список</Form.Label>
                                <Form.Select aria-label="Default select example" ref={listRef}>
                                    {
                                        props.toDoLists.map((value) => {
                                            return <option value={value.id}>{value.name}</option>
                                        })
                                    }
                                </Form.Select>{" "}
                            </div>

                            <div class="col-lg-6 col-sm-12">
                                <Form.Label>Приоритет</Form.Label>
                                <Form.Select aria-label="Default select example" ref={priorityRef}>
                                    <option value="1">Обычный</option>
                                    <option value="2">Важный</option>
                                    <option value="3">Критичный</option>
                                </Form.Select>
                            </div>
                        </div>

                        <Form.Label>Описание</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" >
                            <Form.Control className="pt-1" as="textarea" style={{ height: '100px' }} ref={descriptionRef} required />
                        </FloatingLabel>

                    </Form.Group>

                </Card.Body>

                <Card.Footer className="p-2">
                    <Button style={marginForfooter} variant="secondary" type="reset" onClick={() => { idRef.id = null }}>
                        Очистить
                    </Button>{' '}
                    <Button id="ButtonSubmitNewElenetToDo" variant="success" type="submit">
                        Создать
                    </Button>
                </Card.Footer>
            </Form>
        </Card>
    );
}

export {titleRef, descriptionRef, priorityRef, listRef, idRef};


export default ElementCreate;