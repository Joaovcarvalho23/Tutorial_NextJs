// "use client"
// //^Temos que colocar no começo do arquivo!! Isso vai mudar para componente do tipo Cliente

import ErrorPage from "../error";

// import { useEffect } from "react";

// export default function HelloPage() {

//     useEffect(() => {}, [])

//     return <div>Hello novo programador NextJs!</div>
// }

export default async function HelloPage(){ 
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });

   // throw Error("Bazinga!!"); esse retorna erro!

    return <div>Hello novo programador NextJs!</div>
}
//o motivo que fizemos esse componente como função assíncrono é que como padrão do app router, a partir do next 13, todos os componentes são do tipo servidor. Isso significa que não importa o código que coloquemos, só vai ser executado no servidor, nunca vai alcançar o cliente. Assim, podemos fazer requisções à API, botar dados sensíveis e credenciais.
//Porém, o cliente só pega o return.
//Se nós precisarmos de interatividades com States ou effects e react, ou click handlers, por exemplo, que deveriam fazer algo quando clicamos em um botão, ou APIs que só estão disponíveis no browser, daí precisamos criar um componente Cliente ou inves de um componente Servidor