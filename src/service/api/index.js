import axios from "axios";

const apiUrl = "http://localhost:1337/api";

const token = localStorage.getItem("token");

const apiConfig = { headers: { Authorization: `Bearer ${token}` } }; 

const login = (email, password) => {
    return axios.post(`${apiUrl}/auth/local`, {
        identifier: email,
        password
    })
}

const createPatient = (data) => {
    return axios.post(`${apiUrl}/patients`, { data }, apiConfig);
}

const updatePatient = (data, patientId) => {
    return axios.put(`${apiUrl}/patients/${patientId}`, { data }, apiConfig);
}

const getManyPatients = () => {
    return axios.get(`${apiUrl}/patients`, apiConfig);
}

const deletePatient = (patientId) => {
    return axios.delete(`${apiUrl}/patients/${patientId}`, apiConfig);
}

const createMeal = (data) => {
    return axios.post(`${apiUrl}/meals`, { data }, apiConfig);
}

const updateMeal = (data, mealId) => {
    return axios.put(`${apiUrl}/meals/${mealId}`, { data }, apiConfig);
}

const getManyMeals = () => {
    return axios.get(`${apiUrl}/meals`, apiConfig);
}

const deleteMeal = (mealId) => {
    return axios.delete(`${apiUrl}/meals/${mealId}`, apiConfig)
}

export const api = {
    auth: {
        login
    },
    patient: {
        create: createPatient,
        update: updatePatient,
        delete: deletePatient,
        getMany: getManyPatients,
    },
    meals: {
        create: createMeal,
        update: updateMeal,
        delete: deleteMeal,
        getMany: getManyMeals,
    }
}