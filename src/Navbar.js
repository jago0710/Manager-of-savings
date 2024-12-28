import React from "react";

export default function Navbar() {
    let username = "Joel";

    const closeSession = () =>{
        /**Close sessión */
    }

    return (
        <div className="flex flex-row justify-between items-center p-5">
            <p className='text-xl'>Bank of saving</p>
            <p className="">Bienvenido {username} </p>
            <button className="p-2 rounded-lg border" onClick={closeSession}>Cerrar Session</button>
        </div>
    )
}