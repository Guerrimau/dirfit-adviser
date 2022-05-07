import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <h1>Dirfit</h1>
            <Link to="/dashboard">Inicio</Link>
            <Link to="/patients">Pacientes</Link>
            <h3>Comidas</h3>
            <h3>Dieta</h3>
            <h3>Estadisticas</h3>
            <Link to="/">Salir</Link>
        </section>
    )
}
