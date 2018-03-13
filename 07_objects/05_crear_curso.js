function crearCurso(horario, nombre){
  var curso = {
    horario: horario,
    nombre: nombre,
    profesor: '',
    salon: '',
    asignarProfesor: function(nombre){
      this.profesor = nombre;
    },
    asignarSalon: function(salon){
      this.salon = salon;
    }
  }
}

var matematicas = crearCurso('10am - 11am', 'Matemáticas');
matematicas.asignarProfesor('Dumbledore');
matematicas.asignarSalon('101');
console.log(matematicas);