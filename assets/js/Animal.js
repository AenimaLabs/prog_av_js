export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this.nombre = nombre;
      this.edad = edad;
      this.img = img;
      this.comentarios = comentarios;
      this.sonido = sonido;
    }
  
    get Nombre() {
      return this.nombre;
    }
  
    get Edad() {
      return this.edad;
    }
  
    get Img() {
      return this.img;
    }
  
    set Comentarios(comentarios) {
      this.comentarios = comentarios;
    }
  
    get Sonido() {
      return this.sonido;
    }
  }