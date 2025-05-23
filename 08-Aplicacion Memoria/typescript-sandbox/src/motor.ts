import { Carta, Tablero } from "./model";

const barajarCartas = (cartas: Carta[]): Carta[] => {
  const cartasBarajadas = cartas;
  for (let i = cartasBarajadas.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartasBarajadas[i], cartasBarajadas[j]] = [
      cartasBarajadas[j],
      cartasBarajadas[i],
    ];
  }
  return cartasBarajadas;
};

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  if (tablero.cartas[indice].estaVuelta) {
    return false;
  } else {
    return true;
  }
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;

  if (tablero.indiceCartaVolteadaA === undefined) {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
};

export const evaluarCartas = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
    parejaEncontrada(tablero, indiceA, indiceB);
    mostrarMensaje(
      `Pareja Encontrada. Llevas ${tablero.intentos} intentos de encontrar parejas`
    );
    if (esPartidaCompleta(tablero)) {
      tablero.estadoPartida = "PartidaCompleta";
      mostrarMensaje("¡Felicidades, has encontrado todas las parejas!");
    }
  } else {
    setTimeout(() => {
      volverCarta(tablero);

      tablero.cartas[indiceA].estaVuelta = false;
      tablero.cartas[indiceB].estaVuelta = false;
      tablero.indiceCartaVolteadaA = undefined;
      tablero.indiceCartaVolteadaB = undefined;
      tablero.estadoPartida = "CeroCartasLevantadas";
      mostrarMensaje(
        `Llevas ${tablero.intentos} intentos de encontrar parejas`
      );
    }, 1000);
  }
};

const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.estaVuelta);
};

export const iniciaPartida = (tablero: Tablero) => {
  tablero.cartas = barajarCartas(tablero.cartas);
  tablero.cartas.forEach((carta) => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  });
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.intentos = 0;
};

const volverCarta = (tablero: Tablero): void => {
  const contenedorPrincipal: HTMLDivElement = document.getElementById(
    "contenedor-cartas"
  ) as HTMLDivElement;
  if (contenedorPrincipal && contenedorPrincipal instanceof HTMLDivElement) {
    if (
      tablero.indiceCartaVolteadaA !== undefined &&
      tablero.indiceCartaVolteadaB !== undefined
    ) {
      contenedorPrincipal.children[
        tablero.indiceCartaVolteadaA
      ].innerHTML = `<img src=" " alt="" />`;
      contenedorPrincipal.children[
        tablero.indiceCartaVolteadaB
      ].innerHTML = `<img src=" " alt="" />`;
    }
  }
};

export const mostrarMensaje = (mensaje: string): void => {
  const contenedorMensaje = document.getElementById("mensaje");
  if (contenedorMensaje) {
    contenedorMensaje.innerHTML = mensaje;
  }
};
