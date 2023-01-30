const nombre = "Edson";
const apellido = "Sanchez";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un saludo: ${getSaludo(nombreCompleto)}`);
