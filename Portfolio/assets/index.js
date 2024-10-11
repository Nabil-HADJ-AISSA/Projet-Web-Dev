document.getElementById("refresh_btn").addEventListener('click', function(event) {

  
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  
  var randomImageSource = "../assets/images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  
  var image1 = document.querySelectorAll("img")[0];
  
  image1.setAttribute("src", randomImageSource);
  
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  var randomImageSource2 = "../assets/images/dice" + randomNumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  document.getElementById("refresh_btn").innerHTML ="Rejouer"

  //Si le joueur 1 gagne
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Le joueur 1 gagne !";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Le joueur 2 gagne ! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Partie nulle!";
}
});

// Page Contact Js:

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Merci ${name}, votre message a été envoyé !`);

  this.reset();
});

