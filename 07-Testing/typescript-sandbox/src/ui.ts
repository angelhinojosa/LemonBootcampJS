import { ACTIVAR, DESACTIVAR, Partida } from "./model";

import {
  obtieneMensaje,
  acumulaPuntuacion,
  mensajeQueHabriaPasado,
  habilitarQueHabríaPasado,
  isGameOver,
  iniciarPartida,
  dameCarta,
} from "./motor";

export let partida: Partida;

const cambiarImagenCarta = (valor: number): void => {
  const elementoFotoCarta = document.getElementById(
    "foto-carta"
  ) as HTMLImageElement;

  if (elementoFotoCarta !== undefined && elementoFotoCarta !== null) {
    switch (valor) {
      case 0:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        elementoFotoCarta.alt = "imagen de la carta Boca abajo";
        break;
      case 1:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta AS de Copas";
        break;
      case 2:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta 2 de Copas";
        break;
      case 3:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta 3 de Copas";
        break;
      case 4:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta 4 de Copas";
        break;
      case 5:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta 5 de Copas";
        break;
      case 6:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta 6 de Copas";
        break;
      case 7:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta 7 de Copas";
        break;
      case 8:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta Sota de Copas";
        break;
      case 9:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta Caballo de Copas";
        break;
      case 10:
        elementoFotoCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        elementoFotoCarta.alt = "imagen de la carta Rey de Copas";
        break;
    }
  }
};

export const muestraPuntuacion = (): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Lleva ${partida.puntuacion} PUNTOS.`;
  } else {
    console.error("No se ha encontrado elemento con id puntuacion");
  }
};

const muestraMensaje = (mensaje: string): void => {
  const elementoMensaje = document.getElementById("mensaje");

  if (elementoMensaje) {
    elementoMensaje.innerHTML = mensaje;
  } else {
    console.error("No se ha encontrado elemento con id mensaje");
  }
};

const activarDesactivarBoton = (
  idElemento: string,
  activarDesactivar: boolean
): void => {
  const elemento = document.getElementById(idElemento);

  if (elemento && elemento instanceof HTMLButtonElement) {
    elemento.disabled = activarDesactivar;
  } else {
    console.error(
      `gestionarDesactivar->No se ha encontrado elemento con id ${idElemento}`
    );
  }
};

const gameOver = (): void => {
  muestraMensaje(obtieneMensaje(partida.puntuacion));
  activarDesactivarBoton("dameCarta", DESACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
  activarDesactivarBoton("reiniciar", ACTIVAR);
};

// Handler de los bototes
export const handleDameCarta = (): void => {
  const numeroCarta: number = dameCarta();
  cambiarImagenCarta(numeroCarta);
  acumulaPuntuacion(numeroCarta);
  muestraPuntuacion();
  activarDesactivarBoton("plantarse", ACTIVAR);
  if (isGameOver()) {
    gameOver();
  }
};

export const handlePlantarse = (): void => {
  muestraMensaje(obtieneMensaje(partida.puntuacion));
  activarDesactivarBoton("dameCarta", DESACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
  activarDesactivarBoton("reiniciar", ACTIVAR);
  if (habilitarQueHabríaPasado()) {
    activarDesactivarBoton("curioso", ACTIVAR);
  }
};

export const handleQueHabriaPasado = (): void => {
  handleDameCarta();
  muestraMensaje(mensajeQueHabriaPasado());
  activarDesactivarBoton("curioso", DESACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
};

export const handleReiniciar = () => {
  iniciarPartidaUI();
};

export const iniciarPartidaUI = (): void => {
  partida = iniciarPartida();
  cambiarImagenCarta(0);
  muestraPuntuacion();
  muestraMensaje(obtieneMensaje(partida.puntuacion));
  activarDesactivarBoton("dameCarta", ACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
  activarDesactivarBoton("reiniciar", DESACTIVAR);
  activarDesactivarBoton("curioso", DESACTIVAR);
};
