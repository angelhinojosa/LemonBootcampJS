import { InfoCarta } from "../src-pc1/main";

export const mostrarCarta = (
  contenedor: HTMLDivElement,
  array: InfoCarta[]
): void => {
  // Muestra la carta que corresponde por el indice.
  contenedor.innerHTML = `<img src="${array[contenedor.id].imagen}" alt="" />`;
};

// const contenedorPrincipal: HTMLDivElement = document.getElementById(
//   "contenedor-cartas"
// ) as HTMLDivElement;
// if (contenedorPrincipal && contenedorPrincipal instanceof HTMLDivElement) {
//   for (let i = 0; i < contenedorPrincipal.children.length; i++) {
//     if (
//       contenedorPrincipal.children[i] &&
//       contenedorPrincipal.children[i] instanceof HTMLDivElement
//     ) {
//       contenedorPrincipal.children[i].addEventListener("click", () =>
//         mostrarCarta(contenedorPrincipal.children[i] as HTMLDivElement)
//       );
//     }
//   }
// }
