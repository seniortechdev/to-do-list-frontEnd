import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./homePage/HomePage";
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = configureStore({
    reducer: {
        task : tasksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;