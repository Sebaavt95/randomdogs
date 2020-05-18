import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import './ImagenRandom.css'
import '../Spinner.css'

const ImagenRandom = ({ imagen, guardarImagen, cargando, guardarCargando, nombreraza, randomraza, guardarRandomRaza, like, guardarLike, favoritas, guardarFavoritas, guardarBusqueda }) => {

   const cambiarImagen = () => {
      guardarImagen('');
      guardarCargando(true);
      guardarRandomRaza(false);
      guardarBusqueda(false);

      setTimeout(() => {
         guardarCargando(false);
      }, 1500);
      guardarLike(false);
   }

   const agregarFavorita = () => {
      for (let i = 0; i < favoritas.length; i++) {
         if (favoritas[i].url === imagen) {
            const favoritasRestantes = favoritas.filter(favorita => favorita.url !== imagen);
            guardarFavoritas(favoritasRestantes);
            guardarLike(false);
            return;
         }
      }

      const imgFavorita = {
         url: imagen,
      }

      imgFavorita.id = shortid.generate();

      guardarFavoritas([...favoritas, imgFavorita]);
      guardarLike(true);
   }

   return (
      <Fragment>
         <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <div className="card mb-3 mt-3">
               <div className="card-body p-0">
                  {cargando ?
                     <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                     </div>
                     : <img src={imagen} alt="Random dog!" className="img-fluid rounded mx-auto d-block" />
                  }
                  {!randomraza ? <p className="nombre-raza m-0 lead">{nombreraza}</p> : null}
               </div>
               <div className="card-footer d-flex">
                  <button
                     className="btn btn-primary btn-lg"
                     onClick={cambiarImagen}
                  >Random!</button>
                  <button type="button" className="btn btn-primary like" onClick={agregarFavorita}><i className={like ? 'fas fa-heart' : 'far fa-heart'}></i></button>
               </div>
            </div>
         </div>
      </Fragment>
   );
}

ImagenRandom.propTypes = {
   imagen: PropTypes.string.isRequired,
   guardarImagen: PropTypes.func.isRequired,
   cargando: PropTypes.bool.isRequired,
   guardarCargando: PropTypes.func.isRequired,
   nombreraza: PropTypes.string.isRequired,
   randomraza: PropTypes.bool.isRequired,
   guardarRandomRaza: PropTypes.func.isRequired,
   like: PropTypes.bool.isRequired,
   guardarLike: PropTypes.func.isRequired,
   favoritas: PropTypes.array.isRequired,
   guardarFavoritas: PropTypes.func.isRequired,
   guardarBusqueda: PropTypes.func.isRequired
}

export default ImagenRandom;