import Animal from "./Animal.js";

export default class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Chillar() {
    const audio = document.getElementById("player");
    audio.src = `assets/sounds/Chillido.mp3`;
    audio.play();
  }
}