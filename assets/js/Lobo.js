import Animal from "./Animal.js";

export default class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Aullar() {
    const audio = document.getElementById("player");
    audio.src = `assets/audio/Aullido.mp3`;
    audio.play();
  }
}