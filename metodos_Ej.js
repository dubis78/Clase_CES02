//======== metodo filter recibe una funcion y retorna un array
const nums =[1,2,3,4,5,6];
const mascotas=[
    {nombre:'Orion',especie:'Perro',edad:1},
    {nombre:'Spica',especie:'Gato',edad:3},  
    {nombre:'Antares',especie:'Huron',edad:2}      
] 
console.log(nums.filter(x=>x<4));
console.log(mascotas.filter(x=>x.especie=='Perro'||x.especie=='Gato'));
//console.log(mascotas[2].nombre)
//////////////////////////////////////////////////


//======== metodo map recibe una funcion y retorna un array 
console.log(nums.map(x=>x*2));
console.log(mascotas.map(x=>x.edad));
//////////////////////////////////////////////////


//======== metodo reduce retorna el resultado acumulado segun la funcion definida
console.log(`La suma de los nums es: ${nums.reduce((acumulador,elemento)=>acumulador+elemento,0)}`);
console.log(`El factorial de 6 es: ${nums.reduce((acumulador,elemento)=>acumulador*elemento,1)}`);