import { heroes } from "./data/heroes";

console.log(heroes);

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) =>
    heroe.owner.toLocaleLowerCase().includes(owner.toLocaleLowerCase())
  );
};

console.log(getHeroeByOwner("DC"));
