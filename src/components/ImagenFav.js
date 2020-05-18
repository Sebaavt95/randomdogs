import React from 'react'
import PropTypes from 'prop-types'
import './ImagenFav.css'
import { nombreRaza, agregarMayuscula, eliminarNumeros } from '../helpers'

const ImagenFav = ({ favorita, eliminarFavorita }) => {

   let nombre = agregarMayuscula(nombreRaza(favorita.url));
   let nombreID = eliminarNumeros(favorita.id);
   let id = `#${nombreID}`;

   return (
      <div className="imagen m-1 p-1 img-fluid rounded d-flex flex-column align-items-center">
         <img src={favorita.url} alt="" className="img-chica" data-target={id} data-toggle="modal" />

         <div className="modal fade" id={nombreID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-body">
                     <img src={favorita.url} alt="" />
                  </div>
                  <div className="modal-footer d-flex justify-content-around">
                     <h5>{nombre}</h5>
                     <button type="button" className="alert alert-secondary px-2 py-1 m-0" data-dismiss="modal" onClick={() => eliminarFavorita(favorita.id)}>Eliminar favorita</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

ImagenFav.propTypes = {
   favorita: PropTypes.object.isRequired,
   eliminarFavorita: PropTypes.func.isRequired
}

export default ImagenFav;