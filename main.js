var number = 1
var string = ""
const words = ["KISS","MARRY","KILL"]
var pokemons = []
fetch_pokemons()

function get_pokemon(id, n) {
	fetch(pokemons[id-1].url)
	.then((response) => response.json())
	.then((data) => {
		string += data.name + ":" + words[n] + "\n"
		number = Math.floor(Math.random() * pokemons.length)+1
		fetch(pokemons[number-1].url)
		.then((response) => response.json())
		.then((data) => {
			var types = ""
			data.types.forEach(element => {
				types += element.type.name + " "
			});
			document.getElementById("image").src = data.sprites.other["official-artwork"].front_default
			document.getElementById("pokemonName").textContent = "Name: " + data.name
			document.getElementById("height").textContent = "Height: " + data.height/10 + " m"
			document.getElementById("weight").textContent = "Weight: " + data.weight/10 + " kg"
			document.getElementById("type").textContent = "Types: " + types
			document.getElementById("id").textContent = "ID: " + data.id
		})
	})
}

function results() {
	console.log(string)
}

function choice(n) {
	//console.log(number + ": " + words[n])
	get_pokemon(number, n)
}

async function fetch_pokemons() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
	const json = await response.json()
	pokemons = await json.results
}