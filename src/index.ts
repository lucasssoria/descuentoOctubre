import "./styles.css";

// inicio
// solicitar: mes, pecio unitario y cantidad.
// se validan los datos
// accion del boton
// variables y sus operaciones
// en caso de ser mer "Octubre" se valida un descuento de 15%
// en caso contrario se muestra el total

let mes = document.getElementById("mes");
let precioUnitario = document.getElementById("precioUnitario");
let cantidad = document.getElementById("cantidad");

btnSend.addEventListener("click", () => {
  let total = precioUnitario.value * cantidad.value;
  let descuento = (total * 15) / 100;
  let precioFinal = total - descuento;
  if (mes.value == "Octubre") {
    console.log(
      "Se aplica descuento.\nEl total de su compra es: " +
        total +
        " Con el 15% de descuento. Precio final: " +
        precioFinal
    );
    // convert to template string(?)
  } else {
    console.log("No se aplica descuento.\nEl total es: " + total);
  }
});
