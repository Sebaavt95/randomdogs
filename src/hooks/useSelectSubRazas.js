import React, { useState, useEffect } from 'react'
import { minusculas, agregarMayuscula } from '../helpers'

const useSelectSubRazas = (stateInicial, raza) => {

   const [subraza, guardarSubRaza] = useState(stateInicial);
   const [subrazas, guardarSubRazas] = useState([]);

   useEffect(() => {
      if (raza === '') return;

      const consultarAPI = async () => {
         const url = `https://dog.ceo/api/breed/${minusculas(raza)}/list`;
         const respuesta = await fetch(url);
         const resultado = await respuesta.json();
         const arraySubRazas = resultado.message;
         guardarSubRazas(arraySubRazas);
         guardarSubRaza('');
      }
      consultarAPI();
   }, [raza]);

   const elegirSubRaza = e => {
      const nombreSubraza = e.target.value;

      if (nombreSubraza === '') return null;

      guardarSubRaza(nombreSubraza);
   }

   const SelectSubRazas = () => (
      <div className="col-sm-12 col-md-3 mb-2">
         <select
            className="custom-select"
            value={subraza}
            onChange={elegirSubRaza}
            isdisabled="true"
         >
            <option value="">- Seleccionar Subraza -</option>
            {subrazas.map(subraza => (
               <option
                  key={subraza}
                  value={subraza}
               >{agregarMayuscula(subraza)}</option>
            ))}
         </select>
      </div>
   );

   return [subraza, subrazas, SelectSubRazas];
}

export default useSelectSubRazas;