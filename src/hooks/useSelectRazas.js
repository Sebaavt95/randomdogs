import React, { Fragment, useState } from 'react'
import { agregarMayuscula } from '../helpers'

const useSelectRazas = (stateInicial, razas, guardarBusqueda) => {

   const [raza, guardarRaza] = useState(stateInicial);

   const elegirRaza = async e => {
      const nombreRaza = e.target.value

      if (nombreRaza === '') return null;

      guardarRaza(nombreRaza);
      guardarBusqueda(false);
   }

   const SelectRazas = () => (
      <Fragment>
         <div className="col-sm-12 col-md-6 mb-2">
            <select
               className="custom-select"
               value={raza}
               onChange={elegirRaza}
            >
               <option value="">- Seleccionar Raza -</option>
               {razas.map(raza => (
                  <option
                     key={raza}
                     value={raza}
                  >{agregarMayuscula(raza)}</option>
               ))}
            </select>
         </div>
      </Fragment>
   );

   return [raza, SelectRazas];
}

export default useSelectRazas;