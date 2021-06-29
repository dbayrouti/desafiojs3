/* Aquí utilizo el while para que el usuario por medio de los prompt ingrese productos que necesite y al finalizar solo debe escribir la palabra Salir */

/* let producto = prompt("Ingresar un producto");
while (producto != "Salir") {
  alert("Usted ha seleccionado " + producto);
  producto = prompt("Seleccione otro producto o escriba Salir para terminar");
} */

/* En este ciclo el usuario ingresará un valor numérico el cual se multiplicará hasta 10, los resultados los obtendrá por medio de alertas y al llegar a 10 dejarán de aparecer las alertas. */

let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 10; i++) {
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + " X " + i + " = " + resultado);
}
