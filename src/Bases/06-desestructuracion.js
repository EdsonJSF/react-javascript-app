// Desestructiracion
// Asignacion Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre: nombre2, edad, clave } = persona;

console.log(nombre2, edad, clave);

const useContext = ({ nombre, clave, rango = "Capitan" }) => {
  console.log(nombre, clave, rango);
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const { nombreClave, anios } = useContext(persona);

console.log(nombreClave, anios);
