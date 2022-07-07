

import axios from "axios";

const instance = axios.create({
    baseURL: "https://swapi.dev/api/people/"
});

export const getPeople = async () => {
    const { data } = await instance.get('/');
    return data.results;
}

export const getHumanById = async (id) => {
    const { data } = await instance.get(`/${id}`);
    return data;
}