import React from "react"
import { useAuth } from "../AuthContext"
import { useNavigate } from 'react-router-dom';

export default function Overview(){
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate("/login");
    }

    return(
        <div>
            <h2>Este es el overview, a continuacion se muestran las caracteristicas de la pagina:</h2>
            <p>Login /login

            Desarrollar la página de login para ingresar con correo y contraseña.
            Almacenar la sesión en localStorage para persistir el login.

            Home /

            Mostrar un mensaje de bienvenida.
            Incluir un menú de navegación para acceder a las otras páginas.
            
            Overview /overview

            Mostrar información general del sistema.
            Incluir un menú de navegación para acceder a las otras páginas.

            Contact /contact

            Mostrar un formulario de contacto.
            Incluir un menú de navegación para acceder a las otras páginas.
            </p>
        </div>
    )
}