"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps{
    error: Error,
    resetar: () => void
}

export default function ErrorPage({error, resetar}: ErrorPageProps){
    return(
        <div>
            <h1>Erro</h1>
            <p>Algo deu errado...</p>
            <Button onClick={resetar}>Tente de novo</Button>
        </div>
    )
}