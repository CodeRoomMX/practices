var rawData = 'HTML|101|Miriam|8am-10am||CSS|102|Adrian|9am-10am||JS|103|Joy|10am-11am||NodeJS|201|Edgar|10am-11am||Algorithms|301|Jessica|11am-12pm';

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

var rawCourses = rawData.split('||');
for(var i = 0; i < rawCourses.length; i++){
  var rawCourse = rawCourses[i].split('|');
  var curso = crearCurso(rawCourse[3], rawCourse[0]);
  curso.asignarProfesor(rawCourse[2]);
  curso.asignarSalon(rawCourse[1]);
  console.log(curso);
}