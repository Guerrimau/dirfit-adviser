import React, { useState } from "react";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField } from "@mui/material";
import { Sidebar } from "../../components/sidebar";

const newPatientInitialState = {
    name: "",
    lastName: "",
    age: 0,
    dietBefore: false,
    amountOfPrevDiets: 0,
}

export const PatientsPage = () => {

    const [patients, setPatients] = useState([]);
    const [showAddPatientModal, setShowAddPatientModal] = useState(false);
    const [newPatient, setNewPatient] = useState(newPatientInitialState);

    const openAddPatientModal = () => {
        setShowAddPatientModal(true);
    };

    const closeAddPatientModal = () => {
        setShowAddPatientModal(false);
    }

    const onDietBeforeClick = (e) => {
        setNewPatient(prevState => ({
            ...prevState,
            dietBefore: e.target.checked
        }));
    }

    const onFormChange = (e) => {
        setNewPatient(prevState => ({
            ...prevState,
            [e.target.id] : e.target.value
        }));
    }

    const onAddPatientClick = () => {
        setPatients(patients.concat([newPatient]));
        setNewPatient(newPatientInitialState);
        closeAddPatientModal();
    }

    return (
        <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "250px calc(100vw - 250px)" }}>
            <Sidebar />
            <main>
                <h1>Pacientes</h1>
                <ul>
                    {patients.map(patient => (
                        <li>{patient.name} {patient.lastName}</li>
                    ))}
                </ul>
                <Dialog open={showAddPatientModal} onClose={closeAddPatientModal}>
                    <DialogTitle>Agregar paciente</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="name"
                            label="Nombre"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onFormChange}/>
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
                        <FormControlLabel checked={newPatient?.dietBefore} onChange={onDietBeforeClick} control={<Checkbox /> } label="¿Llevó dieta anteriormente?" />
                        { newPatient.dietBefore && 
                            <TextField
                                id="amountOfPrevDiets"
                                label="Cantidad de veces"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={onFormChange} /> }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeAddPatientModal}>Cancel</Button>
                        <Button onClick={onAddPatientClick}>Agregar</Button>
                    </DialogActions>
                </Dialog>
                <Button onClick={openAddPatientModal}>Agregar</Button>
            </main>
        </div>
    )
}
