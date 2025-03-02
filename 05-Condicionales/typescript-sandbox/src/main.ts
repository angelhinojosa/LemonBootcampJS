let puntuacion: number = 0;
const MAXIMA_PUNTUACION: number = 7.5;
const DESACTIVAR: boolean = true;
const ACTIVAR: boolean = false;

const cambiarImagenCarta = (valor: number): void => {
  const elementoFotoCarta = document.getElementById(
    "foto-carta"
  ) as HTMLImageElement;

  if (elementoFotoCarta !== undefined && elementoFotoCarta !== null) {
    switch (valor) {
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

const obtienePuntuacion = (valorCarta: number): number => {
  if (valorCarta > 7) {
    puntuacion += 0.5;
  } else {
    puntuacion += valorCarta;
  }

  return puntuacion;
};

const muestraPuntuacion = (): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Lleva ${puntuacion} PUNTOS.`;
  } else {
    console.error("No se ha encontrado elemento con id puntuacion");
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const obtieneMensaje = (puntuacion: number): string => {
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
  muestraMensaje(obtieneMensaje(puntuacion));
  activarDesactivarBoton("dameCarta", DESACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
  activarDesactivarBoton("reiniciar", ACTIVAR);
};

// Handler de los bototes
const handleDameCarta = (): void => {
  const generarNumeroAleatorio = (): number =>
    Math.floor(Math.random() * (11 - 1) + 1);

  const numeroCarta: number = generarNumeroAleatorio();

  cambiarImagenCarta(numeroCarta);
  obtienePuntuacion(numeroCarta);
  muestraPuntuacion();
  activarDesactivarBoton("plantarse", ACTIVAR);
  if (puntuacion > MAXIMA_PUNTUACION) {
    gameOver();
  }
};

const handlePlantarse = (): void => {
  muestraMensaje(obtieneMensaje(puntuacion));
  activarDesactivarBoton("dameCarta", DESACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
  activarDesactivarBoton("reiniciar", ACTIVAR);
  if (puntuacion != 7.5) {
    activarDesactivarBoton("curioso", ACTIVAR);
  }
};

const handleReiniciar = (): void => {
  location.reload();
};

const handleQueHabriaPasado = (): void => {
  let mensaje: string;
  handleDameCarta();

  if (puntuacion <= 7.5) {
    mensaje = `Sin el Canguelo habrías alcanzado los ${puntuacion} PUNTOS`;
  } else {
    mensaje = `Bien Jugado porque habrías perdido con ${puntuacion} PUNTOS`;
  }

  muestraMensaje(mensaje);
  activarDesactivarBoton("curioso", DESACTIVAR);
  activarDesactivarBoton("plantarse", DESACTIVAR);
};

const botonDameCarta = document.getElementById("dameCarta");

if (botonDameCarta) {
  botonDameCarta.addEventListener("click", handleDameCarta);
}

const botonPlantarse = document.getElementById("plantarse");

if (botonPlantarse) {
  botonPlantarse.addEventListener("click", handlePlantarse);
}

const botonNuevaPartida = document.getElementById("reiniciar");

if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener("click", handleReiniciar);
}

const botonQueHabriaPasado = document.getElementById("curioso");

if (botonQueHabriaPasado) {
  botonQueHabriaPasado.addEventListener("click", handleQueHabriaPasado);
}
