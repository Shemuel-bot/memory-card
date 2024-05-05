import shuffleArray from "./shuffleArray";

async function GetImage(character, id) {
    const img = document.getElementById(id);
    
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=evIaS4dVpQPQWKDuqBrKcIVutD0qe48b&s=${character}`,
      { mode: "cors" }
    );
    const jsonResponse = await response.json();
    img.src = jsonResponse.data.images.original.url;
}


export default function ShuffleCards(){
    const imgs = Array.from(document.querySelectorAll('img'));
    const names = shuffleArray([
      "obi wan",
      "anikan skywalker",
      "darth vader",
      "yoda",
      "princess leia",
      "luke skywalker",
      "han solo",
      "chewbacca",
      "r2 d2",
      "c3po",
      "mace windu",
      "ahsoka tano"
    ]);

    imgs.forEach((x)=>{
      GetImage(names[imgs.indexOf(x)], x.id)
      x.nextSibling.textContent = names[imgs.indexOf(x)];
    });
}