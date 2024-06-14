import Animal from "./Animal.js";

export default class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    const audio = document.getElementById("player");
    audio.src = `assets/audio/Siseo.mp3`;
    audio.play();
  }
}