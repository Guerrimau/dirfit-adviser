import React, { useState, useEffect } from "react";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField } from "@mui/material";
import { api } from "../../../../service/api";

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

    const onSavePatientClick = async () => {
        try {
            const data = { ...patient }
            delete data.id;
            await api.patient.update(data, patient.id);
            updatePatient(patient);
        closeUpdatePatientModal();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setPatient(patientData);
    }, [patientData])

    return (
        <Dialog open={showUpdatePatientModal} onClose={closeUpdatePatientModal}>
            <DialogTitle>Actualizar paciente</DialogTitle>
            <DialogContent>
                <TextField
                    id="firstName"
                    label="Nombre"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={patient?.firstName}
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
                    id="email"
                    label="Correo"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={patient?.email}
                    onChange={onFormChange} />
                <TextField
                    id="age"
                    label="Edad"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={patient?.age}
                    onChange={onFormChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeUpdatePatientModal}>Cancel</Button>
                <Button onClick={onSavePatientClick}>Guardar</Button>
            </DialogActions>
        </Dialog>
    )
}
