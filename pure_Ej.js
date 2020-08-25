
//===================================================
function sumarPrecios(cantidad,valor){
  let totalCompra=0;
  return totalCompra=totalCompra+cantidad*valor;
}
console.log(sumarPrecios(2,100));
console.log(sumarPrecios(1,100));
console.log(sumarPrecios(1,200));
console.log(sumarPrecios(1,100));
console.log(sumarPrecios(2,200));
console.log(sumarPrecios(2,100));
console.log('================================');
//===================================================

function suma(num1,num2){
  return num1+num2;
}
console.log(suma(-15,10));
console.log(suma(5,10));
console.log(suma(1,4));
console.log(suma(5,10));
console.log(suma(-15,10));
console.log('================================');
//====================================================


const n1=10,n2=2; //variables globales

let sum=function(){
  return n1+n2;
}
console.log(sum(4,5));
console.log(sum(5,2));
console.log(sum(4,5));
console.log('================================');
//====================================================
let sums=(num1,num2)=>{
  return num1+num2;
}
console.log('holis '+sums(4,5));

//====================================================

// function vectoris(inputVector){
//   let outVector=inputVector;
//   outVector[0]=10;
//   return [outVector,inputVector]  
// }

// //const inicial=[0,1,2,3,4,5];
// let nuevo=vectoris([0,1,2,3,4,5]);
// //console.log(inicial);
// console.log(nuevo);
// console.log('================================');



