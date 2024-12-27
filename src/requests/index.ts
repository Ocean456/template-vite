import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllUser = () => request.get("/user/all");

export const addUser = (data: any) => request.post("/user/add", data);

export const updateUser = (data: any) => request.put("/user/update", data);

export const deleteUser = (data: any) => request.delete("/user/delete", { params: {id:data} });