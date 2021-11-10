const express = require("express");
const route = express.Router();
const axios = require("axios");
require("dotenv").config();

const API_BASE_URL = process.env.API_BASE_URL;
const API_TOKEN = process.env.API_TOKEN;
const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: "Bearer " + API_TOKEN,
    },
});

const queryToParams = (obj) => {
    return Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join("&");
};

route.get("/anime", async function (req, res) {
    const queries = queryToParams({ ...req.query });
    const per_page = 20;
    try {
        const response = await instance.get(
            `/v1/anime?${queries}&per_page=${per_page}`
        );
        res.status(200).json({
            ...response.data.data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = route;
