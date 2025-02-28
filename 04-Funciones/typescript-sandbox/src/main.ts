function getTurnoActual(): number {
  const numeroTurno = document.getElementById("numeroTurno");
  let turno: number = 0;
  if (
    numeroTurno !== null &&
    numeroTurno !== undefined &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    turno = parseInt(numeroTurno.innerHTML);
  }
  return turno;
}

function actualizarTurno(numero: number): void {
  const turnoElement = document.getElementById("numeroTurno");

  if (
    turnoElement !== null &&
    turnoElement !== undefined &&
    turnoElement instanceof HTMLHeadingElement
  ) {
    turnoElement.innerHTML = numero.toString().padStart(2, "0");
    activaDesactivaBotones(numero);
  }
}

function activaDesactivaBotones(numero: number): void {
  const elementoAnterior = document.getElementById("anterior");
  const textoTurnoElement = document.getElementById("textoTurno");

  if (elementoAnterior && elementoAnterior instanceof HTMLButtonElement) {
    if (numero === 0) {
      elementoAnterior.disabled = true;
    } else {
      elementoAnterior.disabled = false;
    }
  } else {
    console.error(
      "activaDesactivaBotones->No se ha encontrado elemento con id anterior"
    );
  }

  if (textoTurnoElement !== null && textoTurnoElement !== undefined) {
    if (numero === 0) {
      textoTurnoElement.innerHTML = "Espere a que comencemos.";
    } else {
      textoTurnoElement.innerHTML = "Por favor, acérquese al mostrador.";
    }
  } else {
    console.error(
      "activaDesactivaBotones->No se ha encontrado elemento con id textoTurno"
    );
  }
}

function siguienteTurno(): void {
  // Leer los valores de los inputs
  const turnoActual: number = getTurnoActual();

  actualizarTurno(turnoActual + 1);
}

function anteriorTurno(): void {
  // Leer los valores de los inputs
  const turnoActual: number = getTurnoActual();

  if (turnoActual > 0) {
    actualizarTurno(turnoActual - 1);
  } else {
    actualizarTurno(0);
  }
}

function resetearTurno(): void {
  // Leer los valores de los inputs
  const turnoActual: number = getTurnoActual();

  actualizarTurno(turnoActual - turnoActual);
  activaDesactivaBotones(0);
}

const forzarTurno = () => {
  const elementoNumero = document.getElementById("numero");
  let turnoForzado: number = 0;

  if (
    elementoNumero &&
    elementoNumero instanceof HTMLInputElement &&
    elementoNumero.value != ""
  ) {
    turnoForzado = parseInt(elementoNumero.value);
    elementoNumero.value = "";
    actualizarTurno(turnoForzado);
  }
};

resetearTurno();

const botonSiguiente = document.getElementById("siguiente");

if (botonSiguiente !== null && botonSiguiente !== undefined) {
  botonSiguiente.addEventListener("click", siguienteTurno);
}

const botonAnterior = document.getElementById("anterior");

if (botonAnterior !== null && botonAnterior !== undefined) {
  botonAnterior.addEventListener("click", anteriorTurno);
}

const botonResetar = document.getElementById("resetear");

if (botonResetar !== null && botonResetar !== undefined) {
  botonResetar.addEventListener("click", resetearTurno);
}

const botonForzarNumero = document.getElementById("forzar");

if (botonForzarNumero) {
  botonForzarNumero.addEventListener("click", forzarTurno);
}
