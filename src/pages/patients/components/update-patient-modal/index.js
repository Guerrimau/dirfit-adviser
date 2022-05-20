import React, { useState, useEffect } from "react";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField } from "@mui/material";

export const UpdatePatientModal = ({
    showUpdatePatientModal,
    closeUpdatePatientModal,
    updatePatient,
    patientData
}) => {
    const [patient, setPatient] = useState({});

    const onFormChange = (e) => {
        setPatient(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onDietBeforeClick = (e) => {
        setPatient(prevState => ({
            ...prevState,
            dietBefore: e.target.checked
        }));
    }

    const onSavePatientClick = () => {
        //const res = await API.POST('/Update/Patient', patient);
        updatePatient(patient);
        closeUpdatePatientModal();
    }

    useEffect(() => {
        setPatient(patientData);
    }, [patientData])

    return (
        <Dialog open={showUpdatePatientModal} onClose={closeUpdatePatientModal}>
            <DialogTitle>Actualizar paciente</DialogTitle>
            <DialogContent>
                <TextField
                    id="name"
                    label="Nombre"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={patient?.name}
                    onChange={onFormChange} />
                <TextField
                    id="lastName"
                    label="Apellido"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={patient?.lastName}
                    onChange={onFormChange} />
                <TextField
                    id="age"
                    label="Edad"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={patient?.age}
                    onChange={onFormChange} />
                <FormControlLabel checked={patient?.dietBefore} onChange={onDietBeforeClick} control={<Checkbox />} label="¿Llevó dieta anteriormente?" />
                {patient.dietBefore &&
                    <TextField
                        id="amountOfPrevDiets"
                        label="Cantidad de veces"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={patient?.amountOfPrevDiets}
                        onChange={onFormChange} />}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeUpdatePatientModal}>Cancel</Button>
                <Button onClick={onSavePatientClick}>Guardar</Button>
            </DialogActions>
        </Dialog>
    )
}
