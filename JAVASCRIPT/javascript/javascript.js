function iniciarCompra() {
  let nombre = prompt("Ingrese su nombre");
  alert("Bienvenido a nuestra tienda " + nombre);

  const precios = {
    remera: 3000,
    sombrilla: 2000,
    gorra: 2500,
    jarra: 1500,
    zapatilla: 45000,
  };

  const productosDisponibles = [
    "remera",
    "sombrilla",
    "gorra",
    "jarra",
    "zapatilla",
  ];

  const deseaComprar = confirm(
    "Hola, " +
      nombre +
      ". Solo nos quedan estos productos disponibles: remeras, sombrillas, gorras, jarras, zapatillas. ¿Deseas seguir comprando?"
  );

  if (deseaComprar) {
    function realizarCompra() {
      let carrito = [];
      let totalCompra = 0;
      let seguirComprando;

      do {
        let producto = prompt("¿Qué desea comprar?").toLowerCase();

        if (productosDisponibles.includes(producto)) {
          let cantidad = parseInt(
            prompt("Ingrese la cantidad que desea comprar para " + producto)
          );

          if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida.");
            continue;
          }

          carrito.push({ producto, cantidad });
          totalCompra = totalCompra + precios[producto] * cantidad;

          console.table(carrito);
          seguirComprando = confirm("¿Desea comprar algo más?");
        } else {
          alert(
            "Lo siento, el producto ingresado no está disponible. O pruebe escribiéndolo en singular. Gracias"
          );
        }
      } while (seguirComprando);

      console.log(totalCompra);
      alert("El total de tu compra sería: $" + totalCompra);
      alert("Gracias, vuelva pronto");
    }

    realizarCompra();
  }
  else {
    alert ("Pronto tendremos más productos " + nombre + ", gracias!")
  }
}

iniciarCompra();
