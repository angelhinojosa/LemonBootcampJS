import {
  handleDameCarta,
  handlePlantarse,
  handleQueHabriaPasado,
  handleReiniciar,
  iniciarPartidaUI,
} from "./ui";

document.addEventListener("DOMContentLoaded", () => iniciarPartidaUI());

const botonDameCarta = document.getElementById("dameCarta");

if (botonDameCarta) {
  botonDameCarta.addEventListener("click", () => handleDameCarta());
}

const botonPlantarse = document.getElementById("plantarse");

if (botonPlantarse) {
  botonPlantarse.addEventListener("click", () => handlePlantarse());
}

const botonNuevaPartida = document.getElementById("reiniciar");

if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener("click", () => handleReiniciar());
}

const botonQueHabriaPasado = document.getElementById("curioso");

if (botonQueHabriaPasado) {
  botonQueHabriaPasado.addEventListener("click", () => handleQueHabriaPasado());
}
