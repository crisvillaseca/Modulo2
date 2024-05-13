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
En el método `votar` toma el parametro `(opcion)` y en caso de ser valido aumenta el contador de votos en 1 unidad. El segundo metodo `obtenerResultados` devuelve los resultados de la encuesta en forma de una matriz.

```ruby
class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.votos = new Array(opciones.length).fill(0);
    }
  
    votar(opcion) {
      if (opcion >= 0 && opcion < this.opciones.length) {
        this.votos[opcion]++;
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
### Matriz de encuestas
Este comando crea una matriz vacía llamada encuestas, que se utiliza para almacenar todas las instancias de la clase `Encuesta`.
```ruby
  const encuestas = [];
```

##
### Funciones
La funcion `crearEncuesta`  crea una nueva instancia de `Encuesta` con la pregunta y las opciones proporcionadas.
Luego, agrega esta instancia a la matriz encuestas.
```ruby
  function crearEncuesta(pregunta, opciones) {
    const encuesta = new Encuesta(pregunta, opciones);
    encuestas.push(encuesta);
    return encuesta;
  }
```


La funcion `votarEncuesta` permite votar en una encuesta específica. Toma los parametros `encuesta`, que es el índice de la encuesta en la matriz encuestas, y `opcion` que es el índice de la opción de respuesta en la encuesta.
```ruby
  function votarEncuesta(encuesta, opcion) {
    if (encuesta >= 0 && encuesta < encuestas.length) {
      return encuestas[encuesta].votar(opcion);
    } else {
      return false;
    }
  }
```


La funcion `mostrarResultados` muestra los resultados de una encuesta específica en la consola.
```ruby
  function mostrarResultados(encuesta) {
    if (encuesta >= 0 && encuesta < encuestas.length) {
      const resultados = encuestas[encuesta].obtenerResultados();
      console.log(`Resultados: ${encuestas[encuesta].pregunta}`);
      resultados.forEach((resultado, index) => {
        console.log(`${index + 1}. ${resultado.opcion}: ${resultado.votos} votos`);
      });
    } else {
      console.log("La encuesta no ha sido creada.");
    }
  }
```
## Codigo completo
```ruby
class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.votos = new Array(opciones.length).fill(0);
    }
  
    votar(opcion) {
      if (opcion >= 0 && opcion < this.opciones.length) {
        this.votos[opcion]++;
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
  
  const encuestas = [];
  
  function crearEncuesta(pregunta, opciones) {
    const encuesta = new Encuesta(pregunta, opciones);
    encuestas.push(encuesta);
    return encuesta;
  }
  
  function votarEncuesta(encuesta, opcion) {
    if (encuesta >= 0 && encuesta < encuestas.length) {
      return encuestas[encuesta].votar(opcion);
    } else {
      return false;
    }
  }
  
  function mostrarResultados(encuesta) {
    if (encuesta >= 0 && encuesta < encuestas.length) {
      const resultados = encuestas[encuesta].obtenerResultados();
      console.log(`Resultados: ${encuestas[encuesta].pregunta}`);
      resultados.forEach((resultado, index) => {
        console.log(`${index + 1}. ${resultado.opcion}: ${resultado.votos} votos`);
      });
    } else {
      console.log("La encuesta no ha sido creada.");
    }
  }
```
