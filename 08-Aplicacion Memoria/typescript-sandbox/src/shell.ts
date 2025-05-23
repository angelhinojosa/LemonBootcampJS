import { iniciarPartidaUI, handlerEmpezarPartida, mostrarCarta } from "./ui";

document.addEventListener("DOMContentLoaded", iniciarPartidaUI);

const botonEmpezarPartida = document.getElementById("empezarPartida");

if (botonEmpezarPartida) {
  botonEmpezarPartida.addEventListener("click", handlerEmpezarPartida);
}

const contenedorPrincipal: HTMLDivElement = document.getElementById(
  "contenedor-cartas"
) as HTMLDivElement;

if (contenedorPrincipal && contenedorPrincipal instanceof HTMLDivElement) {
  for (let i = 0; i < contenedorPrincipal.children.length; i++) {
    if (
      contenedorPrincipal.children[i] &&
      contenedorPrincipal.children[i] instanceof HTMLDivElement
    ) {
      contenedorPrincipal.children[i].addEventListener("click", () => {
        mostrarCarta(contenedorPrincipal.children[i] as HTMLDivElement);
      });
    }
  }
}
