/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */



const ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

/* Completar creacion del ZombieConductor */

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;



/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function () {
  if (this.direccion === 'v') {
    this.y += this.velocidad;
    if (this.y > this.rangoMov.hastaY) {  
      this.y = this.rangoMov.desdeY - 90;
    }
  }

  if (this.direccion === 'v2') {
    this.y -= this.velocidad;
    if (this.y < this.rangoMov.hastaY) {
      this.y = this.rangoMov.desdeY;
    }
  }

  if (this.direccion === 'h') {

    this.x += this.velocidad;
    if (this.x > this.rangoMov.hastaX) {
      this.x = this.rangoMov.desdeX - 90;
    }
  }
}


ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(50);
}