function getPerson(){
  $.ajax({
    url: "https://swapi.co/api/people/1",
  })
  .done(function(data){
    console.log(data);
    $('h2').text(data.name);
    $('p').text(data.birth_year);
    $('cite').text(`${data.gender}. ${data.height}. ${data.eye_color}, ${data.hair_color}`);
    $.ajax({
      url: data.homeworld
    })
    .done(function(world){
      console.log(world);
      $('article h2').text(world.name);
      $('article p').text(world.terrain);
      $('article cite').text(`${world.gravity}. ${world.population}`);
    });
  })
  .fail(function(err){
    console.log(err);
  });
}

function getPokemon(){
  $.ajax({url:"https://pokeapi.co/api/v2/pokemon/1"})
  .done(function(pokemon){
    console.log(pokemon);
    let abilities = pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`);
    let content = `
      <h2>${pokemon.name}</h2>
      <cite>Height: ${pokemon.height} - Weight: ${pokemon.weight}</cite>
      <ul>${abilities.join('')}</ul>
      <img src="${pokemon.sprites.front_default}" />
    `;
    $('.js-pokemon').html(content);
  });
}

function fetchData(){
  getPerson();
  getPokemon();
}

$(fetchData);