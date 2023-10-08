const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const fetchApi = async () => {
  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const pokemonData = {
        number: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(type => type.type.name),
      };

      cardPoke(pokemonData);

      console.log('Nomor: ' + pokemonData.number);
      console.log('Nama: ' + pokemonData.name);
      console.log('Gambar: ' + pokemonData.image);
      console.log('Tipe: ' + pokemonData.types.join(', '));
    })
};

console.log(fetchApi());

const cardPoke = (pokemonData, numberElem, nameElem, imageElem, typeElem) => {
  const numberPoke = numberElem || document.getElementById("number");
  const namePoke = nameElem || document.getElementById("name");
  const imagePoke = imageElem || document.getElementById('image');
  const typePoke = typeElem || document.getElementById("type");

  numberPoke.innerHTML = pokemonData.number;
  namePoke.innerHTML = pokemonData.name;
  imagePoke.src = pokemonData.image;
  typePoke.innerHTML = pokemonData.types.join(', ');
};


const action = document.getElementById("tombol");
const cardImage = document.getElementsByClassName("container")[0];

action.addEventListener('click', () => {
  cardImage.style.display = "flex";
});
