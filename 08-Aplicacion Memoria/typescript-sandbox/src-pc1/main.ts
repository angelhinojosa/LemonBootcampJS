export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export function barajarCartas(array: InfoCarta[]) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// let cartas: number[] = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
// barajarCartas(cartas);
// console.log(cartas);
