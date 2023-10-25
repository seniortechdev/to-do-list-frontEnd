import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance, getTasksEndPoint,
    addTaskEndPoint, delTaskEndPoint
} from "../api";


export const addTask = createAsyncThunk("hompage/addTask", async( params , { rejectWithValue })=> {
    const data = {
        title: params.newTask.title,
        description: params.newTask.description
    }
    try {
        const response = await axiosInstance.post(addTaskEndPoint, { data }, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const getTasks = createAsyncThunk("hompage/listTask", async() => {
    const response = await axiosInstance.get(getTasksEndPoint);
    return response.data
});

export const removeTask = createAsyncThunk("homePage/removeTask", async (id, { rejectWithValue }) => {
    const data = {
        id: id
    }
    try {
        const response = await axiosInstance.delete( delTaskEndPoint, { data }, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        return response.data._id
    } catch(error) {
        return rejectWithValue(error.message)
    }
})

