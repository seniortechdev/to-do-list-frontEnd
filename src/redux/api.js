import axios from "axios";

// Create base url for axios
export const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
});

//  route endpoints
export const getTasksEndPoint = `tasks/list`;
export const addTaskEndPoint = `tasks/addTask`;