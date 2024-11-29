interface GrupoMusical {
  nombreGrupo: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const estiloNombreGrupo =
  "font-weight:bold; font-size:18px; background-color:green;";

const grupoMusicalA: GrupoMusical = {
  nombreGrupo: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  genero: popRock,
};

const grupoMusicalB: GrupoMusical = {
  nombreGrupo: "Queen",
  añoFundacion: 1970,
  activo: false,
  genero: rock,
};

const grupoMusicalC: GrupoMusical = {
  nombreGrupo: "AC DC",
  añoFundacion: 1973,
  activo: true,
  genero: hardRock,
};

const grupoMusicalD: GrupoMusical = {
  nombreGrupo: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  genero: clasica,
};

const grupoMusicalE: GrupoMusical = {
  nombreGrupo: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  genero: rock,
};

console.log(`%c${grupoMusicalA.nombreGrupo}`, estiloNombreGrupo);
console.log(
  `Año fundación del grupo: ${grupoMusicalA.añoFundacion}. Genero Musical: ${grupoMusicalA.genero}. ¿Se encuentra ACTIVO? ${grupoMusicalA.activo}.`
);
console.log(`%c${grupoMusicalB.nombreGrupo}`, estiloNombreGrupo);
console.log(
  `Año fundación del grupo: ${grupoMusicalB.añoFundacion}. Genero Musical: ${grupoMusicalB.genero}. ¿Se encuentra ACTIVO? ${grupoMusicalB.activo}.`
);
console.log(`%c${grupoMusicalC.nombreGrupo}`, estiloNombreGrupo);
console.log(
  `Año fundación del grupo: ${grupoMusicalC.añoFundacion}. Genero Musical: ${grupoMusicalC.genero}. ¿Se encuentra ACTIVO? ${grupoMusicalC.activo}.`
);
console.log(`%c${grupoMusicalD.nombreGrupo}`, estiloNombreGrupo);
console.log(
  `Año fundación del grupo: ${grupoMusicalD.añoFundacion}. Genero Musical: ${grupoMusicalD.genero}. ¿Se encuentra ACTIVO? ${grupoMusicalD.activo}.`
);
console.log(`%c${grupoMusicalE.nombreGrupo}`, estiloNombreGrupo);
console.log(
  `Año fundación del grupo: ${grupoMusicalE.añoFundacion}. Genero Musical: ${grupoMusicalE.genero}. ¿Se encuentra ACTIVO? ${grupoMusicalE.activo}.`
);
