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

export const api = {
    auth: {
        login
    },
    patient: {
        create: createPatient,
        update: updatePatient,
        delete: deletePatient,
        getMany: getManyPatients,
    }
}