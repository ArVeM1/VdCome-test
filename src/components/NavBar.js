import React, {useEffect} from 'react';
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../redux/slices/auth";
import BurgMenu from "./BurgMenu";
import avatar from "../assets/avatar.png"

const NavBar = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.auth)



    // При первом рендере будет происходить проверка на авторизован пользователь или нет
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(login())
        } else {
            dispatch(logout())
        }
    }, [])

    // Выход из аккаунта
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(logout());
            window.localStorage.removeItem("token");
            navigate(LOGIN_ROUTE)
        }
    };

    return (
        <Navbar bg="dark" variant="dark">
            <BurgMenu />
            <Container>

                <Image
                    width={30}
                    height={30}
                    src="./logo192.png"
                    style={{cursor: "pointer"}}
                    onClick={() => navigate(HOME_ROUTE)}
                />

                {isAuth ?
                    <Nav className="ml-auto" style={{gap: 50}}>
                        <Link to={PROFILE_ROUTE} className="text-decoration-none" >
                            <div className="d-flex align-items-center" style={{cursor: "pointer", gap: 5}}>
                                <Image width={45} height={45} src={avatar}/>
                                <div style={{color: "white"}}>Mr. Director</div>
                            </div>
                        </Link>
                        <Button
                            variant={"outline-light"}
                            style={{marginLeft: "20px"}}
                            onClick={onClickLogout}
                        >
                            Выйти</Button>
                    </Nav> :
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;