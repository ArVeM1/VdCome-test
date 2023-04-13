import React, {useState} from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, fetchRegister} from "../redux/slices/auth";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = location.pathname === LOGIN_ROUTE
    const {isAuth} = useSelector(state => state.auth);
    const [user, setUser] = useState({email: '', password: ''})

    // При клике у нас будет проверка на какой мы странице находимся и от этого будет зависить нужный нам запрос
    const click = async () => {
        const fields = {
            email: user.email,
            password: user.password
        }
        try {
            let data;
            if (isLogin) {
                data = await dispatch(fetchAuth(fields))
            } else {
                data = await dispatch(fetchRegister(fields))
            }
        } catch (e) {
            console.log(e)
        }
    }

    if (isAuth) {
        navigate(HOME_ROUTE)
    }

    return (
        <>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            style={{marginTop: 20}}
                            placeholder="Введите ваш email..."
                            value={user.email}
                            onChange={e => setUser({...user, email: e.target.value})}
                        />
                        <Form.Control
                            style={{marginTop: 20}}
                            placeholder="Введите ваш пароль..."
                            type="password"
                            value={user.password}
                            onChange={e => setUser({...user, password: e.target.value})}
                        />
                        <Row className="d-flex justify-content-between mt-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTER_ROUTE}
                                                           className="text-decoration-none">Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}
                                                           className="text-decoration-none">Войдите!</NavLink>
                                </div>}
                            <Button
                                variant={"outline-success"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>
    );
};

export default Auth;