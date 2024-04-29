import React, {Fragment, useState} from "react"
import ReactDOM from "react-dom"
import { useLocalStorage } from "../useLocalStorage"

export default function Login(){
    let loginConfirmation = false
    const userEmail = "admin@admin.com"
    const userPassword = "admin"
    const [boxEmail, setBoxEmail] = useLocalStorage('boxEmail', '')
    const [boxPassword, setBoxPassword] = useLocalStorage('boxPassword', '')
    const handleClick = () => {
        if (userEmail == boxEmail && userPassword == boxPassword){
            loginConfirmation = true
            alert("El usuario y la contraseña son correctas")
            return loginConfirmation
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
                type="text"
                onChange={e => setBoxEmail(e.target.value)}
                value={boxEmail}/>
            </form>

            <h3>Ingrese su contraseña</h3>

            <form>
                <input 
                id="passwordlogin"
                type="text"
                onChange={e => setBoxPassword(e.target.value)}
                value={boxPassword}
                />
            </form>

            <button onClick={handleClick}>Login</button>
        </div>
    )
}