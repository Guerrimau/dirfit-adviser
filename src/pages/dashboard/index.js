import React, { useContext } from "react";
import { Sidebar } from "../../components/sidebar";
import { AuthContext } from "../../context/auth-context";
import "../../styles/dashboard/index.css";

export const DashboardPage = () => {

    return (
        <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "250px calc(100vw - 250px)" }}>
            <Sidebar />
            <main className="content">
                <div className="home__messages card">
                    <h2>Mensajes</h2>
                    <div className="home__messages--list">
                        <div className="message-item">
                            <div className="message-item__picture"></div>
                            <div className="column">
                                <h4 className="message-item__name">David Gutierrez</h4>
                                <p className="message-item__text">Hola coach, como podria?...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__dates card">
                    <h2>Citas</h2>
                    <ul>
                        <li>Lunes</li>
                        <p><strong>5:00pm :</strong> Cita con Erika Rascon</p>
                        <li>Martes</li>
                        <li>Miercoles</li>
                        <li>Jueves</li>
                        <li>Viernes</li>
                    </ul>
                </div>
                <div className="home__patients card">
                    <h2>Pacientes</h2>
                    <div className="home__patients--list">
                        <div className="patient-item">
                            <div className="patient-item__picture"></div>
                            <h4>David Gutierrez</h4>
                        </div>
                        <div className="patient-item">
                            <div className="patient-item__picture"></div>
                            <h4>Daniela Duarte</h4>
                        </div>
                        <div className="patient-item">
                            <div className="patient-item__picture"></div>
                            <h4>Peter Parker</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
