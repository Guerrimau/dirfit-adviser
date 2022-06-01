import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'

export const CreateMealModal = ({
    show = false,
    closeModal = () => { },
    addMeal = () => { },
}) => {

    const [newMeal, setNewMeal] = useState({});

    const onFormChange = (e) => {
        setNewMeal(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onAddMealClick = () => {
        // try {
        //     const res = await api.patient.create(newPatient);
        //     const formatedNewPatient = formatCreatePatient(res.data);
        //     addPatient(formatedNewPatient);
        //     closeAddPatientModal();
        //     setNewPatient(newPatientInitialState);
        // } catch (error) {
        //    console.error(error) 
        // }
    }

    return (
        <Dialog open={show} onClose={closeModal}>
            <DialogTitle>Agregar comida</DialogTitle>
            <DialogContent>
                <TextField
                    id="name"
                    label="Nombre"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={onFormChange} />
                <TextField
                    id="ingredients"
                    label="Ingredientes"
                    type="text"
                    fullWidth
                    multiline
                    variant="standard"
                    onChange={onFormChange} />
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="proteins"
                        label="Proteinas"
                        type="number"
                        variant="standard"
                        onChange={onFormChange} />
                    <TextField
                        id="carbs"
                        label="Carbohidratos"
                        type="number"
                        variant="standard"
                        onChange={onFormChange} />
                    <TextField
                        id="fats"
                        label="Grasas"
                        type="number"
                        variant="standard"
                        onChange={onFormChange} />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>Cancelar</Button>
                <Button onClick={onAddMealClick}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
