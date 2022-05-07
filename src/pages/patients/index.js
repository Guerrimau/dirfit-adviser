import { Button } from "@mui/material";
import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar";

const paciente = {
    name: "Gerardo",
    lastName: "Mayboca",
    age: 21,
    dietBefore: true,
    amountOfPrevDiets: 5,
}

export const PatientsPage = () => {

    const [patients, setPatients] = useState([paciente, paciente]);

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
                <Button>Agregar</Button>
            </main>
        </div>
    )
}
