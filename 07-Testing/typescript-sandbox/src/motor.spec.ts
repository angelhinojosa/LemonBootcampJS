import { vi, expect, describe } from "vitest";
import { dameCarta, obtieneMensaje, obtienePuntuacion, partida } from "./motor";

// Apartado Obligatorio
describe("obtieneMensaje", () => {
  it("Te has plantado. Has sido muy conservador", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(4.5);
    const resultadoEsperado = `Te has plantado con 4.5 PUNTOS. Has sido muy conservador`;
    // Act
    const mensaje: string = obtieneMensaje();

    // Assert
    expect(mensaje).toBe(resultadoEsperado);
  });

  it("Te has plantado. Te ha entrado el canguelo eh???", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(5);
    const resultadoEsperado = `Te has plantado con 5 PUNTOS. Te ha entrado el canguelo eh???`;
    // Act
    const mensaje: string = obtieneMensaje();

    // Assert
    expect(mensaje).toBe(resultadoEsperado);
  });

  it("Te has plantado. Casi casi ....", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7);
    const resultadoEsperado = `Te has plantado con 7 PUNTOS. Casi casi ....`;
    // Act
    const mensaje: string = obtieneMensaje();

    // Assert
    expect(mensaje).toBe(resultadoEsperado);
  });

  it("¡Lo has Clavado! ¡Enhorabuena!`", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
    const resultadoEsperado = `Tu puntuación es de 7.5 PUNTOS. ¡Lo has Clavado! ¡Enhorabuena!`;
    // Act
    const mensaje: string = obtieneMensaje();

    // Assert
    expect(mensaje).toBe(resultadoEsperado);
  });

  it("GAME OVER", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8);
    const resultadoEsperado = `GAME OVER`;
    // Act
    const mensaje: string = obtieneMensaje();

    // Assert
    expect(mensaje).toBe(resultadoEsperado);
  });
});

// Apartados adicionales
// Genera numero aleatorio, en mi caso he teneido en cuenta la baraja completa.
describe("dameCarta", () => {
  it("La carta no puede ser menor de 0 ni mayor de 40", () => {
    //Arrange

    //Act
    const carta: number = dameCarta();

    // Assert
    expect(carta).toBeLessThan(41);
    expect(carta).toBeGreaterThan(0);
  });
});

// Obtiene el valor de la carta en funciónd el número aleatorio generado.
describe("obtienePuntuacion", () => {
  it("Puntuación es el valor de la carta si carta <= 7", () => {
    // Arrange
    const valorCarta: number = Math.floor(Math.random() * (8 - 1) + 1);
    const resultadoEsperado: number = valorCarta;

    // Act
    const puntos: number = obtienePuntuacion(valorCarta);

    // Assert
    expect(puntos).toBe(resultadoEsperado);
  });

  it("Puntuación es 0.5 cuando el valor de la carta es > 7", () => {
    // Arrange
    const valorCarta: number = Math.floor(Math.random() * (10 - 8) + 8);
    const resultadoEsperado: number = 0.5;

    // Act
    const puntos: number = obtienePuntuacion(valorCarta);

    // Assert
    expect(puntos).toBe(resultadoEsperado);
  });
});
