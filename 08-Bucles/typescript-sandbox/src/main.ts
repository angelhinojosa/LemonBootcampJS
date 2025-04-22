type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Aparatado 1
// Lista de pacientes asignados a la especialidad de pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria = [...pacientesPediatria, pacientes[i]];
    }
  }
  return pacientesPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

// Lista de pacientes asignados a Pediatria con una edad < 10 Años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatriaMenorDeDiezAnios: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenorDeDiezAnios = [
        ...pacientesPediatriaMenorDeDiezAnios,
        pacientes[i],
      ];
    }
  }
  return pacientesPediatriaMenorDeDiezAnios;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
// Activar protocolo de urgencia si ritmo cardiaco > 100 y temperatura > 39
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 ||
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
// Reasignar pacientes de Pediatria a Medico de familia.
// He decidido que la especialidad origen y destino se pasen como parametro de la función para que
// pueda ser reutilizable en el futuro.
const reasignaPacientesEntreEspecialidades = (
  pacientes: Pacientes[],
  especialidadOrigen: Especialidad,
  especialidadDestino: Especialidad
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === especialidadOrigen) {
      pacientesReasignados = [
        ...pacientesReasignados,
        {
          ...pacientes[i],
          especialidad: especialidadDestino,
        },
      ];
    } else {
      pacientesReasignados = [...pacientesReasignados, pacientes[i]];
    }
  }
  return pacientesReasignados;
};

console.log(
  reasignaPacientesEntreEspecialidades(
    pacientes,
    "Pediatra",
    "Medico de familia"
  )
);

// Apartado 4
// Para poder mandar al Pediatra a casa (si no tiene pacientes asignados) comprobar si en la lista hay algún paciente asignados a pediatria.
// He decidido que la especialidad se pase como parametro de la función para que se pueda reutilizar en cualquier otro caso.
const hayPacientesEspecialidad = (
  pacientes: Pacientes[],
  especialidad: Especialidad
): boolean => {
  let hayPacientes: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === especialidad) {
      hayPacientes = true;
      break;
    }
  }

  return hayPacientes;
};

console.log(hayPacientesEspecialidad(pacientes, "Pediatra"));
const pacientesReasginado = reasignaPacientesEntreEspecialidades(
  pacientes,
  "Pediatra",
  "Medico de familia"
);
console.log(hayPacientesEspecialidad(pacientesReasginado, "Pediatra"));

// Apartado 5
// Calcular el número total de pacientes por especialidad
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesMedicoDeFamilia: number = 0;
  let pacientesPediatria: number = 0;
  let pacientesCardiologia: number = 0;
  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Medico de familia":
        pacientesMedicoDeFamilia++;
        break;
      case "Pediatra":
        pacientesPediatria++;
        break;
      case "Cardiólogo":
        pacientesCardiologia++;
        break;
    }
  }

  const pacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: pacientesMedicoDeFamilia,
    pediatria: pacientesPediatria,
    cardiologia: pacientesCardiologia,
  };

  return pacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
console.log(cuentaPacientesPorEspecialidad(pacientesReasginado));
