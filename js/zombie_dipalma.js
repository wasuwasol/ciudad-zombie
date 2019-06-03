/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */



const ZombieDiPalma = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {

    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
    this.direccion = direccion;
}

/* Completar creacion del ZombieConductor */

ZombieDiPalma.prototype = Object.create(Enemigo.prototype);
ZombieDiPalma.prototype.constructor = ZombieDiPalma;



/* Completar metodos para el movimiento y el ataque */

ZombieDiPalma.prototype.mover = function () {
    if (this.direccion === 'v') {
        this.y += this.velocidad;
        if (this.y > this.rangoMov.hastaY) {
            this.velocidad *= -1;
            this.sprite = 'imagenes/auto_verde_arriba.png';
        }
        if (this.y < this.rangoMov.desdeY) {
            this.velocidad *= -1;
            this.sprite = 'imagenes/auto_verde_abajo.png';
        }

    }
    if (this.direccion === 'h') {
        this.x += this.velocidad;
        if (this.x > this.rangoMov.hastaX) {
            this.velocidad *= -1;
            this.sprite = 'imagenes/auto_verde_izquierda.png';
        }
        if (this.x < this.rangoMov.desdeX) {
            this.velocidad *= -1;
            this.sprite = 'imagenes/auto_verde_derecha.png';
        }
    }
}


ZombieDiPalma.prototype.atacar = function (jugador) {
    jugador.perderVidas(30);
}