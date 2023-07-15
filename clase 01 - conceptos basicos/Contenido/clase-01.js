const nombre = 'Alvaro' // Esta es una variable de tipo string
const isAlumno = true // Esta es una varial\ble de tipo boolean
const edad = 30 // Esta es una variable de tipo integer
const alumno = { nombre: 'Alvaro', edad: 30 } // Esta es una variable de tipo object
const temas = [ 'Programacion', 'Python', 'JS' ] // Esta es una variable de tipo array


if (isAlumno) {
  console.log(`Hola ${nombre}, bienvenido al curso!`);
  console.log('Los temas que veremos son:');

  for (let index = 0; index < temas.length; index++ ) {
    console.log(temas[index])
  }

} else {
  console.log(`Hola ${nombre}, en que te puedo ayudar?`);
}