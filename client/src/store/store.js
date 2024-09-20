import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth-slice";

const store = configureStore ({
    reducer : {
        auth : AuthReducer,
    },
});

export default store;