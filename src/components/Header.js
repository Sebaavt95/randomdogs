import React, { Fragment } from 'react'

const h1Style = {
   cursor: 'default'
};

const aStyle = {
   fontSize: '12px'
};

const Header = () => {
   return (
      <Fragment>
         <header className="w-100 bg-primary text-white text-center py-2 d-flex">
            <h1 className="m-0 mr-auto ml-3 py-1" style={h1Style}>RandomDogs</h1>
            <a href="#!" type="button" className="text-white px-3 py-3 border-left" data-toggle="modal" data-target="#comofuncionaModal" style={aStyle}>¿C&oacute;mo funciona?</a>
         </header>

         <div className="modal fade" id="comofuncionaModal" tabIndex="-1" role="dialog" aria-labelledby="comofuncionaModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="comofuncionaModalLabel">¿C&oacute;mo funciona?</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <h6> RandomDogs funciona del siguiente modo:</h6>
                     <ul>
                        <li className="mb-1">El bot&oacute;n Random! trae una imagen en forma aleatoria de un perro. La raza de cada perro est&aacute; especificada en la parte inferior.</li>
                        <li className="mb-1">Pod&eacute;s usar el buscador que hay debajo para filtrar por una raza espec&iacute;fica. Ten&eacute; en cuenta que algunas razas tienen subrazas y ten&eacute;s que elegir una de ellas para que la b&uacute;squeda se complete. Al pulsar el bot&oacute;n 'Buscar', el mismo se convertirá en Random! para seguir buscando imágenes aleatorias seg&uacute;n la raza que indicaste. Si volv&eacute;s a pulsar el bot&oacute;n Random! de arriba se perderá la b&uacute;squeda por la raza especificada.</li>
                        <li className="mb-1">Con el bot&oacute;n &hearts; pod&eacute;s guardar la imagen dentro de tus favoritas y mirarla cuando quieras.</li>
                        <li className="mb-1">En la secci&oacute;n de imágenes favoritas pod&eacute;s pulsar alguna de las que hayas guardado para verla en mayor tamaño, saber la raza y si quer&eacute;s, eliminarla.</li>
                     </ul>
                     <p className="m-0 text-center text-muted" style={aStyle}>Este sitio utiliza la API de <a href="https://dog.ceo/" target="_blank" rel="noopener noreferrer">Dog CEO</a></p>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-primary" data-dismiss="modal">Listo!</button>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
}

export default Header;