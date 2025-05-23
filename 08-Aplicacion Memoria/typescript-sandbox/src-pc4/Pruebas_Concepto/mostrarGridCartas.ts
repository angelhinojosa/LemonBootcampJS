// const obtenerContenedor = (identificador: string): HTMLDivElement => {
//     const contenedorCarta: HTMLDivElement = document.getElementById(
//       identificador
//     ) as HTMLDivElement;
//     return contenedorCarta;
//   };

//   const mostrarCarta = (
//     contenedor: HTMLDivElement,
//     identificador: string
//   ): void => {
//     // añadir datos a la pelicula
//     switch (identificador) {
//       case "1":
//         contenedor.innerHTML = `
//           <img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png" alt="Leon" />`;
//         break;
//       case "2":
//         contenedor.innerHTML = `
//           <img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png" alt="Buho" />`;
//         break;
//     }
//   };

//   const divCarta1 = obtenerContenedor("1");
//   const divCarta2 = obtenerContenedor("2");

//   divCarta1.addEventListener("click", () => mostrarCarta(divCarta1, "1"));
//   divCarta2.addEventListener("click", () => mostrarCarta(divCarta2, "2"));
