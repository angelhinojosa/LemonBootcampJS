import { tablero } from "./model";
import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  evaluarCartas,
  mostrarMensaje,
} from "./motor";

export const iniciarPartidaUI = (): void => {
  mostrarMensaje(
    "¡Bienvenido al juego de memoria!. Para empezar pulse en Empezar Partida "
  );
};

export const handlerEmpezarPartida = (): void => {
  iniciaPartida(tablero);
  const contenedorPrincipal: HTMLDivElement = document.getElementById(
    "contenedor-cartas"
  ) as HTMLDivElement;
  if (contenedorPrincipal && contenedorPrincipal instanceof HTMLDivElement) {
    for (let i = 0; i < contenedorPrincipal.children.length; i++) {
      if (
        contenedorPrincipal.children[i] &&
        contenedorPrincipal.children[i] instanceof HTMLDivElement
      ) {
        contenedorPrincipal.children[i].innerHTML = `<img src=" " alt="" />`;
      }
    }
  }
  mostrarMensaje("Partida Iniciada, haga clic en las cartas para descubrirlas");
};

export const mostrarCarta = (contenedor: HTMLDivElement): void => {
  if (tablero.estadoPartida !== "PartidaNoIniciada") {
    const indice = parseInt(contenedor.id);
    if (sePuedeVoltearLaCarta(tablero, indice)) {
      voltearLaCarta(tablero, indice);
      contenedor.innerHTML = `<img src="${tablero.cartas[indice].imagen}" alt="" />`;

      if (
        tablero.estadoPartida === "DosCartasLevantadas" &&
        tablero.indiceCartaVolteadaA !== undefined &&
        tablero.indiceCartaVolteadaB !== undefined
      ) {
        tablero.intentos = (tablero.intentos ?? 0) + 1;
        evaluarCartas(
          tablero,
          tablero.indiceCartaVolteadaA,
          tablero.indiceCartaVolteadaB
        );
      }
    } else {
      mostrarMensaje("Carta ya volteada");
    }
  }
};
