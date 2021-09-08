
$(function(){
	$('.menu-toggle, .fa-times').on("click", function(){
		$("nav").toggleClass("active");
		$(".overlay").toggleClass("menu-open");
	});

	$('.overlay').on("click", function(){
		$("nav").removeClass("active");
		$(this).removeClass("menu-open");
	});

});




/*Sneaker DeTails needed from the api Tg4 Sneakers*/
/*Retail Value Est Market Value Release Date*/






fetch("https://the-sneaker-database.p.rapidapi.com/sneakers/d1d8fd81-1c1e-4397-8d4d-971f051d8cd4", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bb51669db0msh1df6d23b9483763p1a9470jsn2d610ac13890",
		"x-rapidapi-host": "the-sneaker-database.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(data => {
	let retailPrice = data.results[0].retailPrice
	let releaseDate = data.results[0].releaseDate
	let estimatedMarketValue = data.results[0].estimatedMarketValue

	document.getElementById("retail").innerHTML = "$" + retailPrice
	document.getElementById("release").innerHTML =  releaseDate
	document.getElementById("curr-value").innerHTML ='$'+estimatedMarketValue
	

})
.catch(err => {
	console.log(err);
});