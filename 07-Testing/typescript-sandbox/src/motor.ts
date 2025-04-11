import { nuevaPartida, MAXIMA_PUNTUACION, Partida } from "./model";

export let partida: Partida = nuevaPartida();

export const dameCarta = (): number => {
  let numeroAleatorio: number = 0;
  do {
    numeroAleatorio = generarNumeroAleatorio();
  } while (partida.cartas.includes(numeroAleatorio));

  partida.cartas.push(numeroAleatorio);
  return simplificaValorCarta(numeroAleatorio);
};

const generarNumeroAleatorio = (): number =>
  Math.floor(Math.random() * (41 - 1) + 1);

const simplificaValorCarta = (valorCarta: number): number => {
  if (valorCarta % 10 != 0) {
    return valorCarta % 10;
  } else {
    return 10;
  }
};

export const acumulaPuntuacion = (valorCarta: number): void => {
  setPuntuacionPartida(obtienePuntuacion(valorCarta));
};

export const obtienePuntuacion = (valorCarta: number): number => {
  if (valorCarta > 7) {
    return 0.5;
  } else {
    return valorCarta;
  }
};

export const obtieneMensaje = (): string => {
  let mensaje: string = " ";

  switch (true) {
    case puntuacionPartida() >= 4 && puntuacionPartida() < 5:
      mensaje = `Te has plantado con ${puntuacionPartida()} PUNTOS. Has sido muy conservador`;
      break;
    case puntuacionPartida() >= 5 && puntuacionPartida() < 6:
      mensaje = `Te has plantado con ${puntuacionPartida()} PUNTOS. Te ha entrado el canguelo eh???`;
      break;
    case puntuacionPartida() >= 6 && puntuacionPartida() <= 7:
      mensaje = `Te has plantado con ${puntuacionPartida()} PUNTOS. Casi casi ....`;
      break;
    case puntuacionPartida() === 7.5:
      mensaje = `Tu puntuación es de ${puntuacionPartida()} PUNTOS. ¡Lo has Clavado! ¡Enhorabuena!`;
      break;
    case puntuacionPartida() > 7.5:
      mensaje = `GAME OVER`;
      break;
    default:
      mensaje = ``;
      break;
  }

  return mensaje;
};

export const mensajeQueHabriaPasado = (): string => {
  if (puntuacionPartida() <= 7.5) {
    return `Sin el Canguelo habrías alcanzado los ${puntuacionPartida()} PUNTOS`;
  } else {
    return `Bien Jugado porque habrías perdido con ${puntuacionPartida()} PUNTOS`;
  }
};

export const habilitarQueHabríaPasado = (): boolean => {
  if (puntuacionPartida() < 7.5) {
    return true;
  } else {
    return false;
  }
};

export const isGameOver = (): boolean => {
  if (puntuacionPartida() > MAXIMA_PUNTUACION) {
    return true;
  } else {
    return false;
  }
};

export const isHasGanado = (): boolean => {
  if (puntuacionPartida() === MAXIMA_PUNTUACION) {
    return true;
  } else {
    return false;
  }
};

export const iniciarPartida = (): void => {
  partida = nuevaPartida();
};

export const puntuacionPartida = (): number => {
  return partida.puntuacion;
};

export const setPuntuacionPartida = (puntos: number): void => {
  partida.puntuacion += puntos;
};
