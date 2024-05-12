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
  
  const encuestas = [];
  
  function crearEncuesta(pregunta, opciones) {
    const encuesta = new Encuesta(pregunta, opciones);
    encuestas.push(encuesta);
    return encuesta;
  }
  
  function votarEnEncuesta(encuestaIndex, opcionIndex) {
    if (encuestaIndex >= 0 && encuestaIndex < encuestas.length) {
      return encuestas[encuestaIndex].votar(opcionIndex);
    } else {
      return false;
    }
  }
  
  function mostrarResultados(encuestaIndex) {
    if (encuestaIndex >= 0 && encuestaIndex < encuestas.length) {
      const resultados = encuestas[encuestaIndex].obtenerResultados();
      console.log(`Resultados de la encuesta: ${encuestas[encuestaIndex].pregunta}`);
      resultados.forEach((resultado, index) => {
        console.log(`${index + 1}. ${resultado.opcion}: ${resultado.votos} votos`);
      });
    } else {
      console.log("Encuesta no encontrada");
    }
  }