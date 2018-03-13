var rawData = 'HTML|101|Miriam|8am-10am||CSS|102|Adrian|9am-10am||JS|103|Joy|10am-11am||NodeJS|201|Edgar|10am-11am||Algorithms|301|Jessica|11am-12pm';

function parseCourses(data){
  var courses = data.split('||');
  for(var i = 0; i < courses.length; i++){
    var course = courses[i];
    var params = course.split('|');
    console.log(params);
  }
}

parseCourses(rawData);