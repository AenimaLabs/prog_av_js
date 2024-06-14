// import Animal from "./Animal.js";
// import Leon from "./Leon.js";
// import Lobo from "./Lobo.js";
// import Oso from "./Oso.js";
// import Serpiente from "./Serpiente.js";
// import Aguila from "./Aguila.js";

// const animales = [];

// const btnRegistrar = document.getElementById("btnRegistrar");
// const preview = document.getElementById("preview");
// const tabla = document.getElementById("Animales");

// btnRegistrar.addEventListener("click", () => {
//   const animal = document.getElementById("animal").value;
//   const edad = document.getElementById("edad").value;
//   const comentarios = document.getElementById("comentarios").value;

//   if (animal == null || animal == "" || edad == null || edad == "" || comentarios == null || comentarios == "") {
//     alert("Por favor, complete todos los campos del formulario.");
//   } else {
//     let animalElegido = obtenerAnimal(animal);
//     const animalInstance = new animalElegido(
//       animal,
//       edad,
//       animalElegido.img,
//       comentarios,
//       animalElegido.sonido
     
//     );

//     preview.innerHTML = `
//       <img src="assets/img/${animalInstance.img}" width="150px">
//     `;

//     animales.push(animalInstance);
//     renderAnimales();
//   }

// });

// function obtenerAnimal(animal) {
//   switch (animal) {
//     case "Leon":
//       return Leon;
//     case "Lobo":
//       return Lobo;
//     case "Oso":
//       return Oso;
//     case "Serpiente":
//       return Serpiente;
//     case "Aguila":
//       return Aguila;
//     default:
//       return Animal;
//   }
// }

// function renderAnimales() {
//   tabla.innerHTML = "";
//   animales.forEach((animal) => {
//     tabla.innerHTML += `
//       <div class="card" style="width: 15rem;">
//         <img src="assets/img/${animal.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${animal.name}</h5>
//           <p class="card-text">${animal.comentarios}</p>
//           <audio class="d-none" src="assets/sounds/${animal.sonido}" id="player"></audio>
//           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="mostrarModal('${animal.img}', '${animal.name}', '${animal.edad}', '${animal.comentarios}', '${animal.sonido}')">Ver detalle</button>
//         </div>
//       </div>
//     `;
//   });
// }

// window.mostrarModal = (img, name, edad, comentarios, sonido) => {
//   let modal = document.querySelector('.modal-body');
//   modal.innerHTML = `
//     <img src="assets/img/${img}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">Años de edad estimados: ${edad}</p>
//       <p class="card-text">Comentarios: ${comentarios}</p>
//       <audio class="d-none" src="assets/sounds/${sonido}" id="player"></audio>
//       <button class="btn btn-primary" onclick="reproducirAudio()">Reproducir sonido</button>
//     </div>
//   `;
// };

// window.reproducirAudio = () => {
//   let audio = document.getElementById('player');
//   audio.play();
// };

// renderAnimales();

// import Animal from "./Animal.js";
// import Leon from "./Leon.js";
// import Lobo from "./Lobo.js";
// import Oso from "./Oso.js";
// import Serpiente from "./Serpiente.js";
// import Aguila from "./Aguila.js";

// const animales = [];

// const btnRegistrar = document.getElementById("btnRegistrar");
// const preview = document.getElementById("preview");
// const tabla = document.getElementById("Animales");

// const imagenes = {
//   Leon: "Leon.png",
//   Lobo: "Lobo.jpg",
//   Oso: "Oso.jpg",
//   Serpiente: "Serpiente.png",
//   Aguila: "Aguila.png",
// };

// const sonidos = {
//   Leon: "leon.mp3",
//   Lobo: "lobo.mp3",
//   Oso: "oso.mp3",
//   Serpiente: "serpiente.mp3",
//   Aguila: "aguila.mp3",
// };

// btnRegistrar.addEventListener("click", () => {
//   const animal = document.getElementById("animal").value;
//   const edad = document.getElementById("edad").value;
//   const comentarios = document.getElementById("comentarios").value;

//   if (animal == null || animal == "" || edad == null || edad == "" || comentarios == null || comentarios == "") {
//     alert("Por favor, complete todos los campos del formulario.");
//   } else {
//     let animalElegido = obtenerAnimal(animal);
//     const animalInstance = new animalElegido(
//       animal,
//       edad,
//       imagenes[animal],
//       comentarios,
//       sonidos[animal]
//     );

//     preview.innerHTML = `
//       <img src="assets/img/${animalInstance.img}" width="150px">
//     `;

//     animales.push(animalInstance);
//     renderAnimales();
//   }
// });

// function obtenerAnimal(animal) {
//   switch (animal) {
//     case "Leon":
//       return Leon;
//     case "Lobo":
//       return Lobo;
//     case "Oso":
//       return Oso;
//     case "Serpiente":
//       return Serpiente;
//     case "Aguila":
//       return Aguila;
//     default:
//       return Animal;
//   }
// }

// function renderAnimales() {
//   tabla.innerHTML = "";
//   animales.forEach((animal) => {
//     tabla.innerHTML += `
//       <div class="card" style="width: 15rem;">
//         <img src="assets/img/${animal.img}" class="card-img-top" alt="${animal.nombre}">
//         <div class="card-body">
//           <h5 class="card-title">${animal.nombre}</h5>
//           <p class="card-text">${animal.comentarios}</p>
//           <audio class="d-none" src="assets/sounds/${animal.sonido}" id="player"></audio>
//           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="mostrarModal('${animal.img}', '${animal.nombre}', '${animal.edad}', '${animal.comentarios}', '${animal.sonido}')">Ver detalle</button>
//         </div>
//       </div>
//     `;
//   });
// }

// window.mostrarModal = (img, nombre, edad, comentarios, sonido) => {
//   let modal = document.querySelector('.modal-body');
//   modal.innerHTML = `
//     <img src="assets/img/${img}" class="card-img-top" alt="${nombre}">
//     <div class="card-body">
//       <h5 class="card-title">${nombre}</h5>
//       <p class="card-text">Años de edad estimados: ${edad}</p>
//       <p class="card-text">Comentarios: ${comentarios}</p>
//       <audio class="d-none" src="assets/sounds/${sonido}" id="player"></audio>
//       <button class="btn btn-primary" onclick="reproducirAudio()">Reproducir sonido</button>
//     </div>
//   `;
// };

// window.reproducirAudio = () => {
//   let audio = document.getElementById('player');
//   audio.play();
// };

// import Animal from "./Animal.js";
// import Leon from "./Leon.js";
// import Lobo from "./Lobo.js";
// import Oso from "./Oso.js";
// import Serpiente from "./Serpiente.js";
// import Aguila from "./Aguila.js";

// let animalesData = [];
// const animales = [];

// const btnRegistrar = document.getElementById("btnRegistrar");
// const preview = document.getElementById("preview");
// const tabla = document.getElementById("Animales");

// // Cargar datos desde el archivo JSON
// // fetch('animales.json')
// //   .then(response => response.json())
// //   .then(data => {
// //     animalesData = data.animales;
// //   })
// //   .catch(error => console.error('Error al cargar el archivo JSON:', error));

// // Cargar datos desde el archivo JSON usando async/await
// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const response = await fetch('animales.json');
//     const data = await response.json();
//     animalesData = data.animales;
//   } catch (error) {
//     console.error('Error al cargar el archivo JSON:', error);
//   }
// });

// btnRegistrar.addEventListener("click", () => {
//   const animal = document.getElementById("animal").value;
//   const edad = document.getElementById("edad").value;
//   const comentarios = document.getElementById("comentarios").value;

//   if (animal == null || animal == "" || edad == null || edad == "" || comentarios == null || comentarios == "") {
//     alert("Por favor, complete todos los campos del formulario.");
//   } else {
//     let animalData = animalesData.find(a => a.name === animal);
//     let animalElegido = obtenerAnimal(animal);

//     const animalInstance = new animalElegido(
//       animal,
//       edad,
//       animalData.imagen,
//       comentarios,
//       animalData.sonido
//     );

//     preview.innerHTML = `
//       <img src="assets/img/${animalInstance.img}" width="150px">
//     `;

//     animales.push(animalInstance);
//     renderAnimales();
//   }
// });

// function obtenerAnimal(animal) {
//   switch (animal) {
//     case "Leon":
//       return Leon;
//     case "Lobo":
//       return Lobo;
//     case "Oso":
//       return Oso;
//     case "Serpiente":
//       return Serpiente;
//     case "Aguila":
//       return Aguila;
//     default:
//       return Animal;
//   }
// }

// function renderAnimales() {
//   tabla.innerHTML = "";
//   animales.forEach((animal) => {
//     tabla.innerHTML += `
//       <div class="card" style="width: 15rem;">
//         <img src="assets/img/${animal.img}" class="card-img-top" alt="${animal.nombre}">
//         <div class="card-body">
//           <h5 class="card-title">${animal.nombre}</h5>
//           <p class="card-text">${animal.comentarios}</p>
//           <audio class="d-none" src="assets/sounds/${animal.sonido}" id="player"></audio>
//           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="mostrarModal('${animal.img}', '${animal.nombre}', '${animal.edad}', '${animal.comentarios}', '${animal.sonido}')">Ver detalle</button>
//         </div>
//       </div>
//     `;
//   });
// }

// window.mostrarModal = (img, nombre, edad, comentarios, sonido) => {
//   let modal = document.querySelector('.modal-body');
//   modal.innerHTML = `
//     <img src="assets/img/${img}" class="card-img-top" alt="${nombre}">
//     <div class="card-body">
//       <h5 class="card-title">${nombre}</h5>
//       <p class="card-text">Años de edad estimados: ${edad}</p>
//       <p class="card-text">Comentarios: ${comentarios}</p>
//       <audio class="d-none" src="assets/sounds/${sonido}" id="player"></audio>
//       <button class="btn btn-primary" onclick="reproducirAudio()">Reproducir sonido</button>
//     </div>
//   `;
// };

// window.reproducirAudio = () => {
//   let audio = document.getElementById('player');
//   audio.play();
// };

import { loadAnimalData } from "./dataLoader.js";
import { obtenerAnimal, addAnimal } from "./animalLogic.js";

(async () => {
  let animalesData = await loadAnimalData();

  const btnRegistrar = document.getElementById("btnRegistrar");
  const preview = document.getElementById("preview");

  btnRegistrar.addEventListener("click", () => {
    const animal = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    if (animal == null || animal == "" || edad == null || edad == "" || comentarios == null || comentarios == "") {
      alert("Por favor, complete todos los campos del formulario.");
    } else {
      let animalData = animalesData.find(a => a.name === animal);
      let animalElegido = obtenerAnimal(animal);

      const animalInstance = new animalElegido(
        animal,
        edad,
        animalData.imagen,
        comentarios,
        animalData.sonido
      );

      preview.innerHTML = `
        <img src="assets/img/${animalInstance.img}" width="150px">
      `;

      addAnimal(animalInstance);
    }
  });
})();
