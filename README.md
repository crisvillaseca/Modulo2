![banner](banner.png)
# Proyecto Modulo 2
## Planteamiento
En este proyecto desarrollamos un programa en Javascript que permite a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo `HTML`.
El codigo guardara la encuesta creada y sus opciones, además de permitir votar y ver sus resultados.
## Requerimientos
El programa debe cumplir con los siguientes requisitos:

- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.
- Implementar la solución utilizando programación orientada a objetos (POO) o programación funcional (PF).

## Solucion explicada paso a paso (POO)
### Creacion de Clase `Encuesta`
Este codigo crea una clase encuesta, con los parametros `pregunta` y `opciones`. Siguiente a esto tiene dos metodos, `votar` y `obtenerResultados`. 
En el método `votar` toma el parametro `(opcionIndex)`

```ruby
class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.votos = new Array(opciones.length).fill(0);
    }
  
    votar(opcionIndex) {
      if (opcionIndex >= 0 && opcionIndex < this.opciones.length) {
        this.votos[opcionIndex]++;
        return true;
      } else {
        return false;
      }
    }
  
    obtenerResultados() {
      return this.opciones.map((opcion, index) => ({
        opcion: opcion,
        votos: this.votos[index]
      }));
    }
  }
```
