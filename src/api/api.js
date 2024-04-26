import axios from "axios";

const productsController = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/products",
})

const usersController = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/users",
})

export {
    productsController,
    usersController
};