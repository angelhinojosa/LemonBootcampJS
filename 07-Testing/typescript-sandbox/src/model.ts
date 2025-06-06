export interface Partida {
  puntuacion: number;
  cartas: number[];
}

// export const partida: Partida = {
//   puntuacion: 0,
//   cartas: [],
// };

export const nuevaPartida = (): Partida => {
  const partida: Partida = {
    puntuacion: 0,
    cartas: [],
  };
  return partida;
};

export const MAXIMA_PUNTUACION: number = 7.5;
export const DESACTIVAR: boolean = true;
export const ACTIVAR: boolean = false;
