var cursos = [
  [ 'HTML', '101', 'Miriam', '8am-10am' ],
  [ 'CSS', '102', 'Adrian', '9am-10am' ],
  [ 'JS', '103', 'Joy', '10am-11am' ],
  [ 'NodeJS', '201', 'Edgar', '10am-11am' ],
  [ 'Algorithms', '301', 'Jessica', '11am-12pm' ],
];

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
  return curso;
}

for(var i = 0; i < cursos.length; i++){
  var curso = crearCurso(cursos[i][3], cursos[i][0]);
  curso.asignarProfesor(cursos[i][2]);
  curso.asignarSalon(cursos[i][1]);
  console.log(curso);
}