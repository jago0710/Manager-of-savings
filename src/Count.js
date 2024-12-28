import React from "react";
import { useState } from "react";

function Count({ value }) {
  const [countSavings, setCountSavings] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  console.log(countSavings);
  console.log("Money: " + totalMoney);

  const setCount = (e) => {
    setCountSavings(parseFloat(e.target.value));
  };

  const saveValue = (e) => {
    if (parseFloat(e.target.value) === 0) {
      alert("No se puede ingresar el valor 0");
    } else if (parseFloat(e.target.value) < 0) {
      // eslint-disable-next-line no-restricted-globals
      let check = confirm("Estas seguro que quieres sacar dinero?");
      if (check === true) {
        setTotalMoney(parseFloat(totalMoney) + parseFloat(e.target.value));
        setCountSavings(0);
      } else {
        console.log("No se guardó el registro");
        setCountSavings(0);
      }
    } else {
      setTotalMoney(parseFloat(totalMoney) + parseFloat(e.target.value));
      setCountSavings(0);
    }
  };

  const changeValue = (e) => {
    setCountSavings(parseFloat(e.target.value));
  };

  const numbersOfShortcurs = [5, 10, 20, 50];

  const getnumbersOfShortcurs = () => {
    return numbersOfShortcurs.map((number) => (
      <button
        key={number}
        className="text-black"
        onClick={changeValue}
        value={number}
      >
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(number)}
      </button>
    ));
  };

  return (
    <div className="flex flex-row justify-center gap-7 m-7">
      <div className="w-6/12 border border-gray-300 rounded p-5">
               <p className="font-bold">Resumen de la cuenta</p>
               <b className="totalMoney"> Saldo: {totalMoney}</b>
               <p className="text-gray-600 ">Número: 0710 2002 2304 2001</p>
        </div>
      <div className="w-6/12 border border-gray-300 rounded p-5">
      <p>
         Acciones Rápidas   
      </p>
      <form onSubmit={saveValue}>

        <input
          className="border p-2 rounded-lg"
          onChange={setCount}
          type="number"
          placeholder="Ingresa el valor del dinero"
        ></input>
        <button className="bg-black text-white p-2 rounded-lg" value={countSavings} type="submit">
          Registrar
        </button>
      </form>
        <div>{getnumbersOfShortcurs}</div>
      </div>
    </div>
  );
}

export default Count;
