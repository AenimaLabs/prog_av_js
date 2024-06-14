import Animal from "./Animal.js";

export default class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Gruñir() {
    const audio = document.getElementById("player");
    audio.src = `assets/audio/Grunido.mp3`;
    audio.play();
  }
}