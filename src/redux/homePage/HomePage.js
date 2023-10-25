import { addTask, getTasks, removeTask } from "./action";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
    success: null,
    loading: false,
    errorGettingTasks: null,
    errorAddingTask: null,
    errorRemovingTask: null,
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.success = true;
            state.tasks = action.payload;
            state.loading = false;
            state.errorGettingTasks = null;
        });
        builder.addCase(getTasks.pending, (state) => {
            state.loading = true;
            state.success = null;
            state.tasks = [];
            state.errorGettingTasks = null;
        });
        builder.addCase(getTasks.rejected, (state, action) => {
            state.success = false;
            state.errorGettingTasks = action.error.message;
            state.loading = false;
            state.tasks = [];
        })
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.success = true;
            state.loading = false;
            state.tasks.push(action.payload);
            state.errorAddingTask = null;
        });
        builder.addCase(addTask.pending, (state) => {
            state.success = null;
            state.loading = true;
            state.errorAddingTask = null;
        });
        builder.addCase(addTask.rejected, (state, action) => {
            state.success = null;
            state.loading = false;
            state.errorAddingTask = action.payload;
        })
        builder.addCase(removeTask.fulfilled, (state,action) => {
            state.success = true;
            state.loading = false;
            state.tasks = state.tasks.filter(task => task._id !== action.payload)
            state.errorRemovingTask = null;
        });
        builder.addCase(removeTask.pending, (state) => {
            state.success = null;
            state.loading = true;
            state.errorRemovingTask = null;
        });
        builder.addCase(removeTask.rejected, (state, action) => {
            state.success = null;
            state.loading = false;
            state.errorRemovingTask = action.payload;
        })
    }
});

export default tasksSlice.reducer;