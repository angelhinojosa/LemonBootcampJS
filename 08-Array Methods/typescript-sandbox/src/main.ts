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
  return pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

// Lista de pacientes asignados a Pediatria con una edad < 10 Años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes) =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
// Activar protocolo de urgencia si ritmo cardiaco > 100 y temperatura > 39
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes): boolean =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
// Reasignar pacientes de Pediatria a Medico de familia.
const reasignaPacientesAOtraEspecialidad = (
  pacientes: Pacientes[],
  especialidadOrigen: Especialidad,
  especialidadDestino: Especialidad
): Pacientes[] => {
  return pacientes.map((paciente: Pacientes) => {
    if (paciente.especialidad === especialidadOrigen) {
      return {
        ...paciente,
        especialidad: especialidadDestino,
      };
    } else {
      return paciente;
    }
  });
};

console.log(
  reasignaPacientesAOtraEspecialidad(pacientes, "Pediatra", "Medico de familia")
);

// Apartado 4
// Para poder mandar al Pediatra a casa (si no tiene pacientes asignados) comprobar si en la lista hay algún paciente asignados a pediatria.
// Lo he hecho genérico para cualquier especialidad.
const hayPacientesEspecialidad = (
  pacientes: Pacientes[],
  especialidad: Especialidad
): boolean => {
  return pacientes.some(
    (paciente: Pacientes): boolean => paciente.especialidad === especialidad
  );
};

console.log(hayPacientesEspecialidad(pacientes, "Pediatra"));

// Apartado 5
// Calcular el número total de pacientes por especialidad
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (acc, paciente) => {
      switch (paciente.especialidad) {
        case "Medico de familia":
          acc.medicoDeFamilia++;
          break;
        case "Pediatra":
          acc.pediatria++;
          break;
        case "Cardiólogo":
          acc.cardiologia++;
          break;
      }
      return acc;
    },
    {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    }
  );
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
