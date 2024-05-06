import React from "react"
import { useAuth } from "../AuthContext"
import { useNavigate } from 'react-router-dom';

export default function Contact(){
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if(!isAuthenticated){
        navigate("/login");
    }

    return <h1>Contact</h1>
}
