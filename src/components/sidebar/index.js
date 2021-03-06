import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <h1>Dirfit</h1>
            <Link to="/dashboard">Inicio</Link>
            <Link to="/patients">Pacientes</Link>
            <Link to="/meals">Comidas</Link>
            <Link to="/">Salir</Link>
        </section>
    )
}
