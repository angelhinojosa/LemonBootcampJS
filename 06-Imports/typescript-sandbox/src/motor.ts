import { partida, MAXIMA_PUNTUACION } from "./model";

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

export const obtienePuntuacion = (valorCarta: number): number => {
  if (valorCarta > 7) {
    partida.puntuacion += 0.5;
  } else {
    partida.puntuacion += valorCarta;
  }

  return partida.puntuacion;
};

export const obtieneMensaje = (puntuacion: number): string => {
  let mensaje: string = " ";

  switch (true) {
    case puntuacion >= 4 && puntuacion < 5:
      mensaje = `Te has plantado con ${puntuacion} PUNTOS. Has sido muy conservador`;
      break;
    case puntuacion >= 5 && puntuacion < 6:
      mensaje = `Te has plantado con ${puntuacion} PUNTOS. Te ha entrado el canguelo eh???`;
      break;
    case puntuacion >= 6 && puntuacion <= 7:
      mensaje = `Te has plantado con ${puntuacion} PUNTOS. Casi casi ....`;
      break;
    case puntuacion === 7.5:
      mensaje = `Tu puntuación es de ${puntuacion} PUNTOS. ¡Lo has Clavado! ¡Enhorabuena!`;
      break;
    case puntuacion > 7.5:
      mensaje = `GAME OVER`;
      break;
    default:
      mensaje = ``;
      break;
  }

  return mensaje;
};

export const mensajeQueHabriaPasado = (): string => {
  if (partida.puntuacion <= 7.5) {
    return `Sin el Canguelo habrías alcanzado los ${partida.puntuacion} PUNTOS`;
  } else {
    return `Bien Jugado porque habrías perdido con ${partida.puntuacion} PUNTOS`;
  }
};

export const habilitarQueHabríaPasado = (): boolean => {
  if (partida.puntuacion < 7.5) {
    return true;
  } else {
    return false;
  }
};

export const isGameOver = (): boolean => {
  if (partida.puntuacion > MAXIMA_PUNTUACION) {
    return true;
  } else {
    return false;
  }
};

export const iniciarPartida = (): void => {
  partida.puntuacion = 0;
  partida.cartas = [];
};
