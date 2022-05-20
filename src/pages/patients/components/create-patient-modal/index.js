import React, { useState } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, Stack, TextField, Typography } from "@mui/material";

const newPatientInitialState = {
    name: "",
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

    const onDietBeforeClick = (e) => {
        setNewPatient(prevState => ({
            ...prevState,
            dietBefore: e.target.checked
        }));
    }

    const onAddPatientClick = () => {
        const newPatientObject = {
            ...newPatient,
            id: Date.now()
        }
        //const res = await API.POST('/Create/Patient', newPatientObject);
        addPatient(newPatientObject);
        closeAddPatientModal();
        setNewPatient(newPatientInitialState);
    }

    return (
        <Dialog open={showAddPatientModal} onClose={closeAddPatientModal}>
            <DialogTitle>Agregar paciente</DialogTitle>
            <DialogContent>
                <TextField
                    id="name"
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
                    id="age"
                    label="Edad"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={onFormChange} />
                <FormControlLabel checked={newPatient?.dietBefore} onChange={onDietBeforeClick} control={<Checkbox />} label="¿Llevó dieta anteriormente?" />
                {newPatient.dietBefore &&
                    <TextField
                        id="amountOfPrevDiets"
                        label="Cantidad de veces"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={onFormChange} />}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeAddPatientModal}>Cancel</Button>
                <Button onClick={onAddPatientClick}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
