import {authRedusers} from "./slices/auth";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        auth: authRedusers,
    }
});

export default store;