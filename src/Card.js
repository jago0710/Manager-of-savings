import React  from "react";

export default function Card({totalMoney}) {

    let moneyCurrency = Intl.NumberFormat("es-Es", { style: "currency", currency: "EUR" }).format(totalMoney)

    return (
        <div className="w-6/12 border border-gray-300 rounded p-5">
               <p className="font-bold">Resumen de la cuenta</p>
               <b className="totalMoney"> Saldo: {moneyCurrency}</b>
               <p className="text-gray-600 ">Número: 071002 230401</p>
        </div>
    )
}