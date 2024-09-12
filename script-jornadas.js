// Lista de equips
const equipos = ["Chivas", "Leon", "Morelia", "Cruz azul", "Pumas", "Real madrid", "Barcelona", "México", "Mazatlan", "Chiapas"];

// Función para generar los emparejamientos
function generarEmparejamientos(equipos) {
    const jornadas = [];
    const numEquipos = equipos.length;

    for (let i = 0; i < numEquipos - 1; i++) {
        const jornada = [];
        for (let j = 0; j < numEquipos / 2; j++) {
            const equipoLocal = equipos[j];
            const equipoVisitante = equipos[numEquipos - 1 - j];
            jornada.push({ local: equipoLocal, visitante: equipoVisitante });
        }
        jornadas.push(jornada);
        equipos.splice(1, 0, equipos.pop());
    }
    return jornadas;
}

// Función para mostrar los emparejamientos en la tabla HTML
function mostrarEmparejamientos(jornadas) {
    const tbody = document.querySelector("#tabla-partidos tbody");
    jornadas.forEach((jornada, index) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 2;
        td.style.fontWeight = "bold";
        td.textContent = `Jornada ${index + 1}`;
        tr.appendChild(td);
        tbody.appendChild(tr);

        jornada.forEach(partido => {
            const tr = document.createElement("tr");
            const tdLocal = document.createElement("td");
            const tdVisitante = document.createElement("td");
            tdLocal.textContent = partido.local;
            tdVisitante.textContent = partido.visitante;
            tr.appendChild(tdLocal);
            tr.appendChild(tdVisitante);
            tbody.appendChild(tr);
        });
    });
}

// Generar y mostrar las jornadas
const jornadas = generarEmparejamientos([...equipos]);
mostrarEmparejamientos(jornadas);