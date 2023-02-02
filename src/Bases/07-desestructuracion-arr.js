// Desestructiracion de arreglos
// Asignacion Desestructurante de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [p1, , posicion] = personajes;

console.log(p1, posicion); // Goku Trunks

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
  return [valor, () => console.log("HolaMundo")];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
