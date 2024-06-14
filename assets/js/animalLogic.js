import Animal from "./Animal.js";
import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Aguila from "./Aguila.js";

const animales = [];

export const obtenerAnimal = (animal) => {
  switch (animal) {
    case "Leon":
      return Leon;
    case "Lobo":
      return Lobo;
    case "Oso":
      return Oso;
    case "Serpiente":
      return Serpiente;
    case "Aguila":
      return Aguila;
    default:
      return Animal;
  }
};

export const addAnimal = (animalInstance) => {
  animales.push(animalInstance);
  renderAnimales();
};



const renderAnimales = () => {
    const tabla = document.getElementById("Animales");
    tabla.innerHTML = "";
    animales.forEach((animal) => {
      tabla.innerHTML += `
        <div class="card" style="width: 15rem;">
          <img src="assets/img/${animal.img}" class="card-img-top" alt="${animal.nombre}">
          <div class="card-body">
            <button class="btn btn-primary" onclick="reproducirSonido('${animal.sonido}')">
              <img src="assets/img/audio.svg" width="20" height="20" alt="Reproducir sonido">
            </button>
          </div>
        </div>
      `;
    });
  };
  

window.reproducirSonido = (sonido) => {
    let audio = new Audio(`assets/sounds/${sonido}`);
    audio.type = 'audio/mp3'; // Agrega el tipo de audio
    audio.play();
  };

window.mostrarModal = (img, nombre, edad, comentarios, sonido) => {
  let modal = document.querySelector('.modal-body');
  modal.innerHTML = `
    <img src="assets/img/${img}" class="card-img-top" alt="${nombre}">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Años de edad estimados: ${edad}</p>
      <p class="card-text">Comentarios: ${comentarios}</p>
      <audio class="d-none" src="assets/sounds/${sonido}" id="player"></audio>
      <button class="btn btn-primary" onclick="reproducirAudio()">Reproducir sonido</button>
    </div>
  `;
};


window.reproducirAudio = () => {
    let audio = document.getElementById('player');
    audio.src = `assets/sounds/${audio.src.split('/').pop()}`; // Agrega la ruta completa del archivo de audio
    audio.play();
  };