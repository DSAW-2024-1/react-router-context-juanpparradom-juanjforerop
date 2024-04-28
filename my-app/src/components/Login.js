import React, {Fragment, useState} from "react"
import ReactDOM from "react-dom"
export default function Login(){
    const [text, setText] = useState(
        window.localStorage.getItem('text')
    )

    const setLocalStorage = value => {
        try {
            setText(value)
            window.localStorage.setItem("text", value)
        } catch(error) {
            console.error(error)
        }
    }
    return(
        <div>
            <h3>Ingrese su correo electronico</h3>
            <form>
                <input 
                type="text" 
                onChange={e => setLocalStorage(e.target.value)}
                value={text}/>
            </form>
            <h3>Ingrese su contraseña</h3>
            <form>
                <input 
                type="text" 
                />
            </form>
        </div>
    )
}

/*<h3>Ingrese su correo:</h3>
            <input>example123@gmail.com</input>
            <h3>Ingrese su contraseña:</h3>
            <input>password123</input>*/