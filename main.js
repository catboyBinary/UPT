var number = 1
var string = ""
const words = ["KILL","SLAP","PASS","EAT","KISS","DATE","SMASH","MARRY"]

function get_pokemon(id, n) {
	fetch('https://pokeapi.co/api/v2/pokemon/'+id)
	.then((response) => response.json())
	.then((data) => {
		string += data.name + ":" + words[n] + ":" + document.getElementById("loveliness").value + "\n"
		number += 1
		fetch('https://pokeapi.co/api/v2/pokemon/'+number)
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