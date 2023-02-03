import { getHeroeById } from "../Bases/08-import-export";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);

    resolve(heroe);

    reject("No se encontro heroe");
  }, 2000);
});

promesa
  .then((resp) => {
    console.log(resp);
  })
  .catch(console.warn);

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (!heroe) return reject("No se encontro heroe");

      resolve(heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(2).then(console.log).catch(console.log);
