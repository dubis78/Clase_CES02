//creador de correos
function crearCorreos(proveedor){  //funcion de orden superior
  return function(nombreUsuario){    //retorna funcion anonima
    return nombreUsuario + '@' + proveedor;
  }
}

let gmail=crearCorreos('gmail.com');
let hotmail=crearCorreos('hotmail.com');

console.log(hotmail('andrea'));
console.log(gmail('andrea'));
//=================================
console.log(crearCorreos('inder.co')('andrea'));
console.log(crearCorreos('franciscomiranda.edu')('diego'));


// let sums=(num1,num2)=>{
//   return num1+num2;
// }
// console.log('holis '+sums(4,5));