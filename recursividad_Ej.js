const listNum=[2,4,8,10];

function sumarLista(lista){   //forma que no se debe usar en program funcional interativo
    let suma=0;
    for(num in lista){  //bucle para reccorrer arrays o objetos
        console.log(lista[num]);
        suma=suma+lista[num];
        //longitud=newList.push(listNum[num]*2);   //metodo push añade elemento al final de array y retorna nueva logitud de este
        // newNList=listNum[num]*4;
        // newNList2=listNum*4;
    }   
    return suma;  
}
console.log(listNum);
console.log('La suma es: '+sumarLista(listNum));
// console.log(newNList);
// console.log(newNList2);
//==========================================

function sumarList (lista){
    if(lista.length===0) {
        return 0;
    }
    else{
        const [first, ...rest] = lista;  //spread operator new features of ECMA6
        console.log(first,rest);
        return first+sumarList(rest);
        //return duplicar([lista[1]*2]);
    }   
}

console.log(sumarList(listNum));