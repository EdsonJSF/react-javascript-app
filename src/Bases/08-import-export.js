import defaultExport, { owners } from "../data/heroes";

// console.log(owners);
// console.log(defaultExport);

// Metodo find
 export const getHeroeById = (id) => {
  return defaultExport.find((heroe) => heroe.id === id);
};
// console.log(getHeroeById(2));

// Metodo filter
const getHeroeByOwner = (owner) => {
  return defaultExport.filter((heroe) =>
    heroe.owner.toLocaleLowerCase().includes(owner.toLocaleLowerCase())
  );
};
// console.log(getHeroeByOwner("DC"));
