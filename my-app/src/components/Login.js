import React, {Fragment, useState} from "react"
import ReactDOM from "react-dom"
import { useLocalStorage } from "../useLocalStorage"

export default function Login(){
    const userEmail = "admin@admin.com"
    const userPassword = "admin"
    let boxEmail = ''
    let boxPassword = ''
    const handleClick = () => {
        boxEmail = document.getElementById("emaillogin").value;
        boxPassword = document.getElementById("passwordlogin").value;
        if (userEmail == boxEmail && userPassword == boxPassword){
            
            alert("El usuario y la contraseña son correctas")
        } else {
            alert("Trolliao puto")
        }
    }
    const [text, setText] = useLocalStorage('text', '')

    return(
        <div>
            <h3>Ingrese su correo electronico</h3>

            <form>
                <input 
                id="emaillogin"
                type="text"/>
            </form>

            <h3>Ingrese su contraseña</h3>

            <form>
                <input 
                id="passwordlogin"
                type="text"
                />
            </form>

            <button onClick={handleClick}>Login</button>
        </div>
    )
}