import Animal from "./Animal.js";

export default class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Rugir() {
    const audio = document.getElementById("player");
    audio.src = `assets/sounds/Rugido.mp3`;
    audio.play();
  }
}