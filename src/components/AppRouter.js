import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Auth from "../pages/Auth";
import {useSelector} from "react-redux";

const AppRouter = () => {
    // Проверка на авторизованного пользователя
    const {isAuth} = useSelector(state => state.auth)

    return (
        <div>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} />
                )}

                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} />
                )}

                <Route path="*" element={<Auth />} />
            </Routes>
        </div>
    );
};

export default AppRouter;