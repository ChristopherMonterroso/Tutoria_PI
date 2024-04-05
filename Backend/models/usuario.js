class Usuario {
  constructor(nombre, carnet, contraseña) {
    this.nombre = nombre;
    this.carnet = carnet;
    this.contraseña = contraseña;
  }

  getNombre() {
    return this.nombre;
  }
  getCarnet() {
    return this.carnet;
  }

  getContraseña() {
    return this.contraseña;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  verificarContraseña(contraseña) {
    return this.contraseña === contraseña;
  }

}

module.exports = Usuario;