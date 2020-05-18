import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useSelectRazas from '../hooks/useSelectRazas'
import useSelectSubRazas from '../hooks/useSelectSubRazas'
import ImagenFav from './ImagenFav'
import { transformarAArray, agregarMayuscula } from '../helpers'

const Menu = ({ guardarImagen, guardarCargando, guardarNombreRaza, guardarRandomRaza, favoritas, eliminarFavorita, busqueda, guardarBusqueda }) => {

   const [razas, guardarRazas] = useState([]);
   const [error, guardarError] = useState(false);

   const [raza, SelectRazas] = useSelectRazas('', razas, guardarBusqueda);
   const [subraza, subrazas, SelectSubRazas] = useSelectSubRazas('', raza);

   useEffect(() => {
      const traerRazas = async () => {
         const url = 'https://dog.ceo/api/breeds/list/all';
         const respuesta = await fetch(url);
         const resultado = await respuesta.json();
         const razas = resultado.message;
         guardarRazas(transformarAArray(razas));
      }
      traerRazas();
   }, []);

   const ejecutarBusqueda = async e => {
      e.preventDefault();

      if ((raza === '' && subrazas.length === 0) || ((raza === '' || subraza === '') && subrazas.length !== 0)) {
         guardarError(true);
         return;
      }
      guardarError(false);

      let razaelegida = '';
      if (subraza === '') {
         razaelegida = raza;
      } else {
         razaelegida = `${raza}/${subraza}`;
      }

      guardarCargando(true);
      guardarNombreRaza('');
      guardarRandomRaza(true);
      const url = `https://dog.ceo/api/breed/${razaelegida}/images/random`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagen(resultado.message);

      setTimeout(() => {
         guardarCargando(false);
      }, 1500);
      guardarBusqueda(true);
   }

   return (
      <Fragment>
         <div className="col-sm-12">
            <div className="row justify-content-center align-items-center">
               <div className="col-sm-12">
                  <h3>Buscar por raza</h3>
                  {error ? <p className="alert alert-dismissible alert-danger m-0 mb-1 py-1 text-center">Seleccion&aacute; una raza/subraza</p> : null}
                  <div className="mb-2">
                     <form
                        onSubmit={ejecutarBusqueda}
                     >
                        <div className="form-row">
                           <SelectRazas />
                           {(subrazas.length !== 0) ? <SelectSubRazas /> : null}
                           <div className="col-sm-12 col-md-3 text-center">
                              <button type="submit" className="btn btn-primary float-md-left">
                                 {busqueda ? `Random! por ${agregarMayuscula(raza)} ${subraza}` : 'Buscar'}
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="col-sm-12">
                  <h3>Im&aacute;genes favoritas</h3>
                  {favoritas.length === 0
                     ? <div className="alert alert-dismissible alert-secondary text-center p-0 py-2 m-0">
                        <h6 className="m-0">No hay favoritas</h6>
                     </div>
                     : <div className="row imagenes px-2">
                        {favoritas.map(favorita => (
                           <ImagenFav
                              key={favorita.id}
                              favorita={favorita}
                              eliminarFavorita={eliminarFavorita}
                           />
                        ))}
                     </div>
                  }
               </div>
            </div>
         </div>
      </Fragment>
   );
}

Menu.propTypes = {
   guardarImagen: PropTypes.func.isRequired,
   guardarCargando: PropTypes.func.isRequired,
   guardarNombreRaza: PropTypes.func.isRequired,
   guardarRandomRaza: PropTypes.func.isRequired,
   favoritas: PropTypes.array.isRequired,
   eliminarFavorita: PropTypes.func.isRequired,
   busqueda: PropTypes.bool.isRequired,
   guardarBusqueda: PropTypes.func.isRequired
}

export default Menu;