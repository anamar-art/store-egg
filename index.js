/*let totalApagar = 0; // Inicialización de la variable que acumula el total a pagar

for (let index = 1; index <= 3; index++) {
  const nombre = prompt("¿Qué producto desea llevar?"); // Solicitar el nombre del producto
  let cantidad = Number(prompt("¿Cuántas unidades?")); // Solicitar la cantidad y convertir a número
  let precio = Number(prompt("¿Cuánto sale cada unidad?")); // Solicitar el precio y convertir a número

  const subtotal = cantidad * precio; // Calcular el subtotal
  totalApagar += subtotal; // Sumar el subtotal al total a pagar
}

console.log(``); // Mostrar el total a pagar
const mensajeFinal= "Deberá pagar en total: $"+totalApagar;
alert(mensajeFinal)*/

const comprar = () => {
  let totalApagar = 0;
  for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
};
const total = comprar();
console.log(``); // Mostrar el total a pagar
const mensajeFinal= "Deberá pagar en total: $"+totalApagar;
alert(mensajeFinal)
