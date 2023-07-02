let waterType = ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png",        
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/752.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/779.png"];

let grassType = ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/906.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/492.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/598.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/798.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103_f2.png",
                 "https://assets.pokemon.com/assets/cms2/img/pokedex/full/756.png"];

let fireType = ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/909.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/637.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/609.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/806.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/839.png"];


let results = document.querySelector(".results");
let submitButton = document.querySelector(".submit");

submitButton.onclick = function(){
  let q1 = document.teamMaker.question1.value;
  let q2 = document.teamMaker.question2.value;
  
  results.style.display = "block";
  
  if(q1 == "cute" && q2 == "water") {
    for(let pkmn of waterType.slice(0, 3)) {
      results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
    }
  } else if(q1 == "strong" && q2 == "water") {
      for(let pkmn of waterType.slice(3, 6)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
    }
  } else if(q1 == "weird" && q2 == "water") {
      for(let pkmn of waterType.slice(6, 9)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
      }
  } else if(q1 == "cute" && q2 == "grass") {
      for(let pkmn of grassType.slice(0, 3)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
    }
  } else if(q1 == "strong" && q2 == "grass") {
      for(let pkmn of grassType.slice(3, 6)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
      }
  } else if(q1 == "weird" && q2 == "grass") {
      for(let pkmn of grassType.slice(6, 9)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
      }
  } else if(q1 == "cute" && q2 == "fire") {
      for(let pkmn of fireType.slice(0, 3)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
    }
  } else if(q1 == "strong" && q2 == "fire") {
      for(let pkmn of fireType.slice(3, 6)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
      }
  } else if(q1 == "weird" && q2 == "fire") {
      for(let pkmn of fireType.slice(6, 9)) {
        results.insertAdjacentHTML("afterbegin", "<img src=" + pkmn + ">");
      }
  }
}

let reloadButton = document.querySelector(".reload");
reloadButton.onclick = function(){
  location.reload();
}