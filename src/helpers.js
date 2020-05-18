export function agregarMayuscula(nombre) {
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

export function minusculas(nombre) {
   return nombre.charAt(0).toLowerCase() + nombre.slice(1);
}

export function transformarAArray(obj) {
   let array = [];
   for (const element in obj) {
      array.push(element);
   }
   return array;
}

export function nombreRaza(url) {
   let nombre = url.slice(30, url.indexOf('/', 30));

   if (nombre.includes('-')) {
      nombre = nombre.replace('-', ' ');
   }
   return nombre;
}

export function nombreId(url) {
   return url.slice(30, url.indexOf('/', 30));
}

export function eliminarNumeros(id) {
   let regex = /[0-9]/ig;
   return id.replace(regex, '');
}