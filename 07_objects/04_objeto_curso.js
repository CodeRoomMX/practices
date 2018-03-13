var curso = {
  horario: '9am - 8am',
  nombre: 'Javascript',
  profesor: '',
  salon: '',
  asignarProfesor: function(nombre){
    this.profesor = nombre;
  },
  asignarSalon: function(salon){
    this.salon = salon;
  }
}

curso.asignarProfesor('Dumbledore');
curso.asignarSalon('101');
console.log(curso);