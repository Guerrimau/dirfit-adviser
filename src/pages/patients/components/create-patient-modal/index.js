import React, { useState } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, Stack, TextField, Typography } from "@mui/material";
import { api } from '../../../../service/api';
import { formatCreatePatient } from '../../../../service/api/formatters/patients/create-patient';

const newPatientInitialState = {
    firstName: "",
    lastName: "",
    age: 0,
    dietBefore: false,
    amountOfPrevDiets: 0,
}

export const CreatePatientModal = ({
    showAddPatientModal,
    closeAddPatientModal,
    addPatient
}) => {
    const [newPatient, setNewPatient] = useState(newPatientInitialState);

    const onFormChange = (e) => {
        setNewPatient(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onAddPatientClick = async () => {
        try {
            const res = await api.patient.create(newPatient);
            const formatedNewPatient = formatCreatePatient(res.data);
            addPatient(formatedNewPatient);
            closeAddPatientModal();
            setNewPatient(newPatientInitialState);
        } catch (error) {
           console.error(error) 
        }
    }

    return (
        <Dialog open={showAddPatientModal} onClose={closeAddPatientModal}>
            <DialogTitle>Agregar paciente</DialogTitle>
            <DialogContent>
                <TextField
                    id="firstName"
                    label="Nombre"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={onFormChange} />
                <TextField
                    id="lastName"
                    label="Apellido"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={onFormChange} />
                <TextField
                    id="email"
                    label="Correo"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={onFormChange} />
                <TextField
                    id="age"
                    label="Edad"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={onFormChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeAddPatientModal}>Cancel</Button>
                <Button onClick={onAddPatientClick}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
