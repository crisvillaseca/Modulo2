class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.votos = new Array(opciones.length).fill(0);
    }
  
    votar(opcionIndex) {
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
      console.log(`Resultados de la encuesta: ${encuestas[encuesta].pregunta}`);
      resultados.forEach((resultado, index) => {
        console.log(`${index + 1}. ${resultado.opcion}: ${resultado.votos} votos`);
      });
    } else {
      console.log("La encuesta no ha sido creada.");
    }
  }
