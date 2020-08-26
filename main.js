var randomNumber = Math.floor(Math.random()*6)+1;

var randomImages = 'images/dice'+randomNumber+'.png';

var randomImageSource = document.querySelectorAll("img")[0];

randomImageSource.setAttribute("src",randomImages);

var secondRandomNumber= Math.floor(Math.random()*6)+1;

var secondrandomImages = 'images/dice'+secondRandomNumber+'.png';

var secondRandomSource = document.querySelectorAll("img")[1];

secondRandomSource.setAttribute("src",secondrandomImages);

if(randomNumber>secondRandomNumber)
{
    document.querySelector("h1").innerHTML="Player 1 wins😘";
}
else if(randomNumber<secondRandomNumber)
{
    document.querySelector("h1").innerHTML="Player 2 wins✌";
}
else
{
    document.querySelector("h1").innerHTML="drawn😒";
}