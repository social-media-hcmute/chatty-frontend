import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@redux/reducers/user/user.service';

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});