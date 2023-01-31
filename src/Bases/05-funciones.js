// Funciones en JS

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar("soy Goku !")); // "Hola soy Goku !"
console.log(saludar2("soy Vegeta !")); // "Hola soy Vegeta !"
console.log(saludar3("soy Bills !")); // "Hola soy Bills !"

// Return Implicito
const getUser = () => ({
  uid: "ABC123",
  username: "Name_user",
});

console.log(getUser());
