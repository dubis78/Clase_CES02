function multiplicar(num){ /// paso 1 num=2// paso 2 num=5
  return num*num;
}

function suma(num1,num2){  //num1=2; num2=5;
  return multiplicar(num1)+ multiplicar(num2);   // 4+ 25
}

//========================

function multiplicarYsumar(num1,num2){ /// paso 1 num=2// paso 2 num=5
  return (num1*num1)+(num2*num2);
}

console.log(suma(2,5)); //
console.log(multiplicarYsumar(2,5)); //