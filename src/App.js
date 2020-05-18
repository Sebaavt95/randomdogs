import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ImagenRandom from './components/ImagenRandom'
import Menu from './components/Menu'
import { nombreRaza, agregarMayuscula } from './helpers'
import './App.css'

function App() {

   // LocalStorage
   let favoritasIniciales = JSON.parse(localStorage.getItem('favoritas'));
   if (!favoritasIniciales) {
      favoritasIniciales = [];
   }

   const [imagen, guardarImagen] = useState('');
   const [cargando, guardarCargando] = useState(false);
   const [nombreraza, guardarNombreRaza] = useState('');
   const [randomraza, guardarRandomRaza] = useState(false);
   const [like, guardarLike] = useState(false);
   const [favoritas, guardarFavoritas] = useState(favoritasIniciales);
   const [busqueda, guardarBusqueda] = useState(false);

   useEffect(() => {
      if (favoritasIniciales) {
         localStorage.setItem('favoritas', JSON.stringify(favoritas));
      } else {
         localStorage.setItem('favoritas', JSON.stringify([]));
      }
   }, [favoritasIniciales, favoritas]);

   useEffect(() => {
      const consultarAPI = async () => {
         if (imagen === '') {
            const url = 'https://dog.ceo/api/breeds/image/random';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            guardarImagen(resultado.message);
            guardarNombreRaza(agregarMayuscula(nombreRaza(resultado.message)));
         }

         favoritas.forEach(favorita => {
            (favorita.url === imagen) ? guardarLike(true) : guardarLike(false);
         });
      }
      consultarAPI();
   }, [imagen, favoritas]);

   const eliminarFavorita = (id) => {
      const favoritasRestantes = favoritas.filter(favorita => favorita.id !== id);
      guardarFavoritas(favoritasRestantes);
      guardarLike(false);
   }

   return (
      <div className="main">
         <div className="container">
            <div className="row">
               <Header />
            </div>
            <div className="row">
               <ImagenRandom
                  imagen={imagen}
                  guardarImagen={guardarImagen}
                  cargando={cargando}
                  guardarCargando={guardarCargando}
                  nombreraza={nombreraza}
                  randomraza={randomraza}
                  guardarRandomRaza={guardarRandomRaza}
                  like={like}
                  guardarLike={guardarLike}
                  favoritas={favoritas}
                  guardarFavoritas={guardarFavoritas}
                  guardarBusqueda={guardarBusqueda}
               />
            </div>
            <div className="row">
               <Menu
                  guardarImagen={guardarImagen}
                  cargando={cargando}
                  guardarCargando={guardarCargando}
                  guardarNombreRaza={guardarNombreRaza}
                  guardarRandomRaza={guardarRandomRaza}
                  favoritas={favoritas}
                  eliminarFavorita={eliminarFavorita}
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
               />
            </div>
            <div className="row mt-4 d-flex justify-content-center">
               <p className="text-muted m-0">&copy; Desarrollado por Sebaavt95</p>
            </div>
         </div>
      </div>
   );
}

export default App;
