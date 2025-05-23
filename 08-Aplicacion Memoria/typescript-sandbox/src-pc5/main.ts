import { barajarCartas, InfoCarta } from "../src-pc1/main";
import { mostrarCarta } from "../src-pc4/main";

let cartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];

cartas = cartas.concat(cartas);

barajarCartas(cartas);

console.log(cartas);

const contenedorPrincipal: HTMLDivElement = document.getElementById(
  "contenedor-cartas"
) as HTMLDivElement;
if (contenedorPrincipal && contenedorPrincipal instanceof HTMLDivElement) {
  for (let i = 0; i < contenedorPrincipal.children.length; i++) {
    if (
      contenedorPrincipal.children[i] &&
      contenedorPrincipal.children[i] instanceof HTMLDivElement
    ) {
      contenedorPrincipal.children[i].addEventListener("click", () =>
        mostrarCarta(contenedorPrincipal.children[i] as HTMLDivElement, cartas)
      );
    }
  }
}
