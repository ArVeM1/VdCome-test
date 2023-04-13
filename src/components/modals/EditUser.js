import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const EditUser = ({show, onHide, onEdit, index, prevUser}) => {
    const [user, setUser] = useState({
        name: '',
        trn: 0,
        yearEnd: '',
        ard: '',
        compNum: 0,
        email: '',
        phone: 0,
        address: ''
    });
    // callback-ом отправляем объект наверх
    const onSubmit = () => {
        onEdit(index, {...user, id: prevUser.id})
        onHide(true)
    }

    // При открытие модального окна вписываем данные так как если мы захотим изменить 1 параметр, придется заного вписывать значения
    useEffect(() => {
        setUser(
            {
                name: prevUser.name,
                trn: prevUser.trn,
                yearEnd: prevUser.yearEnd,
                ard: prevUser.ard,
                compNum: prevUser.compNum,
                email: prevUser.email,
                phone: prevUser.phone,
                address: prevUser.address,
            }
        )
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить нового пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Введите имя: </Form.Label>
                        <Form.Control
                            placeholder={"Введите имя"}
                            value={user.name}
                            onChange={e => setUser({...user, name: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Введите TRN/PPSN: </Form.Label>
                        <Form.Control
                            placeholder={"Введите TRN/PPSN"}
                            value={user.trn}
                            onChange={e => setUser({...user, trn: +e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Введите year end:</Form.Label>
                        <Form.Control
                            placeholder={"Введите year end"}
                            type="date"
                            value={user.yearEnd}
                            onChange={e => setUser({...user, yearEnd: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Введите ARD:</Form.Label>
                        <Form.Control
                            placeholder={"Введите ARD"}
                            type="date"
                            value={user.ard}
                            onChange={e => setUser({...user, ard: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Company number:</Form.Label>
                        <Form.Control
                            type="number"
                            value={user.compNum}
                            onChange={e => setUser({...user, compNum: +e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={e => setUser({...user, email: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Введите phone number: </Form.Label>
                        <Form.Control
                            placeholder={"Введите phone number"}
                            type="number"
                            value={user.phone}
                            onChange={e => setUser({...user, phone: +e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Введите company address: </Form.Label>
                        <Form.Control
                            placeholder={"Введите company address"}
                            className="mt-3"
                            value={user.address}
                            onChange={e => setUser({...user, address: e.target.value})}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onSubmit}>Редактировать</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditUser;