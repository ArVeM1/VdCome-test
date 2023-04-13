import React, {useState} from 'react';
import {Button, Col, Container, Form, Pagination, Row} from "react-bootstrap";
import CreateUser from "../components/modals/CreateUser";
import TableClients from "../components/TableClients";
import {getPagesArrays} from "../utils/pages";

const Home = () => {
    const [userVisible, setUserVisible] = useState(false);
    const [page, setPage] = useState(4);
    // В основном мы должны получить из backend страницы и аргументы вставить посчитанные страницы
    // Но в учебных целях, аргумент будет константой
    let pageArray = getPagesArrays(4);
    const [users, setUsers] = useState([
        {
            id: 5,
            name: 'Artem',
            trn: 654321,
            yearEnd: '2023-04-15',
            ard: '2023-04-08',
            compNum: 123456789,
            email: 'email1234@gmail.com',
            phone: 7674822811,
            address: '10 Name Street'
        },
        {
            id: 2,
            name: 'Danila',
            trn: 653221,
            yearEnd: '2023-04-15',
            ard: '2023-04-08',
            compNum: 123456789,
            email: 'email1234@gmail.com',
            phone: 7674822811,
            address: '10 Name Street'
        },
        {
            id: 3,
            name: 'Vladislav',
            trn: 655421,
            yearEnd: '2023-04-15',
            ard: '2023-04-08',
            compNum: 123456789,
            email: 'email1234@gmail.com',
            phone: 7674822811,
            address: '10 Name Street'
        },
    ]);
    const [searchValue, setSearchValue] = useState('');

    const sortData = (field, sort) => {
        const copyData = [...users];
        let sortData;
        if (sort === "ASC") {
            sortData = copyData.sort((a,b) => {return a[field] > b[field] ? 1 : -1})
        } else {
            sortData = copyData.sort((a,b) => {return a[field] > b[field] ? -1 : 1})
        }
        setUsers(sortData)
    }

    // Получаем данные и добавляем в массив
    const createUser = (newUser) => {
        setUsers([...users, newUser])
    }
    // Фильтруем массив
    const deleteUser = (user) => {
        setUsers(users.filter(u => u.id !== user.id))
    }
    // Сохраняем массив в новую переменную, после по index переписываем отредактированного пользователя
    // и добавляем обратно в массив
    const handleEdit = (index, newData) => {
        const updatedData = [...users];
        updatedData[index] = newData;
        setUsers([...updatedData])
    }

    const filterUsers = users.filter(u => {
        return u.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <>
            <Container>
                <Row className="justify-content-lg-between align-items-center mt-3">
                    <Col lg="3"><h2>Total Contacts</h2></Col>
                    <Col lg="5">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Поиск по имени"
                                className="me-2"
                                aria-label="Search"
                                onChange={e => setSearchValue(e.target.value)}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                    <Col lg="1">
                        <Button
                            onClick={() => setUserVisible(true)}
                        >ADD +</Button>
                    </Col>
                </Row>

                <TableClients users={filterUsers} deleteUser={deleteUser} edit={handleEdit} sortData={sortData}/>

                <Row className="align-items-center justify-content-evenly">
                    <Col lg="2">
                        <Pagination>
                            {pageArray.map(p =>
                                <Pagination.Item onClick={() => setPage(p)} key={p} active={p === page}>
                                    {p}
                                </Pagination.Item>
                            )}
                        </Pagination>
                    </Col>
                </Row>
            </Container>

            <CreateUser
                show={userVisible}
                onHide={() => setUserVisible(false)}
                create={createUser}
            />


        </>
    );
};

export default Home;