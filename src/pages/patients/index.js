import React, { useState, useEffect } from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import { Sidebar } from "../../components/sidebar";
import { CreatePatientModal } from "./components/create-patient-modal";
import { UpdatePatientModal } from "./components/update-patient-modal";
import { api } from "../../service/api";
import { formatGetManyPatients } from "../../service/api/formatters/patients/get-many-patients";
import { useNavigate } from "react-router-dom";

const updatePatientModalInitialState = {
    show: false,
    patient: {}
};

export const PatientsPage = () => {
    const [patients, setPatients] = useState([]);
    const [showAddPatientModal, setShowAddPatientModal] = useState(false);
    const [updatePatientModal, setUpdatePatientModal] = useState(updatePatientModalInitialState);

    const navigate = useNavigate();

    const openUpdatePatientModal = (patient) => {
        setUpdatePatientModal({
            patient,
            show: true
        });
    }

    const closeUpdatePatientModal = () => {
        setUpdatePatientModal(updatePatientModalInitialState);
    }

    const openAddPatientModal = () => {
        setShowAddPatientModal(true);
    };

    const closeAddPatientModal = () => {
        setShowAddPatientModal(false);
    }

    const addPatient = (newPatient) => {
        setPatients(patients.concat([newPatient]));
    }

    const updatePatient = (updatedPatient) => {
        const newPatientList = patients.map(patient => {
            if(patient.id === updatedPatient.id) {
                return updatedPatient;
            } else {
                return patient;
            }
        })
        setPatients(newPatientList);
    };

    const onPlanClick = (patientId) => {
       navigate(`/patients/${patientId}/diet`)
    }

    const onDeletePatientClick = async (deletedId) => {
        try {
            await api.patient.delete(deletedId);
            const newPatientList = patients.filter(patient => patient.id !== deletedId);
            setPatients(newPatientList);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const getData = async () => {
            const res = await api.patient.getMany()
            const formatedData = formatGetManyPatients(res.data);
            setPatients(formatedData);
        }
        getData();
    }, []);

    return (
        <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "250px calc(100vw - 250px)" }}>
            <Sidebar />
            <main style={{ padding: "60px" }}>
                <Typography variant="h4">Pacientes</Typography>
                {patients.length > 0
                    ? <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Edad</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patients.map((patient) => (
                                    <TableRow
                                        key={patient.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {patient.firstName + " " + patient.lastName}
                                        </TableCell>
                                        <TableCell>{patient.age}</TableCell>
                                        <TableCell align="right">
                                            <Button
                                                variant="outlined"
                                                startIcon={<RestaurantIcon />}
                                                onClick={() => onPlanClick(patient.id)}>Plan Alimenticio</Button>
                                            <IconButton onClick={() => openUpdatePatientModal(patient)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => onDeletePatientClick(patient.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <Stack justifyContent="center" direction="row" sx={{ marginTop: "20px" }}>
                        <Typography color="grey">Aún no se han registrado pacientes.</Typography>
                    </Stack>
                }

                <Stack direction="row-reverse" sx={{ marginTop: "20px" }}>
                    <Button
                        startIcon={<PersonAddIcon />}
                        variant="contained"
                        onClick={openAddPatientModal}>Agregar</Button>
                </Stack>

                <CreatePatientModal
                    showAddPatientModal={showAddPatientModal}
                    closeAddPatientModal={closeAddPatientModal}
                    addPatient={addPatient} />

                <UpdatePatientModal
                    showUpdatePatientModal={updatePatientModal.show}
                    closeUpdatePatientModal={closeUpdatePatientModal}
                    patientData={updatePatientModal.patient}
                    updatePatient={updatePatient} />
            </main>
        </div>
    )
}
