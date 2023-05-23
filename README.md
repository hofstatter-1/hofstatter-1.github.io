# hofstatter-1.github.io
<html lang="en">
<style>
body {
    background-color: #3f3e3e;
}
</style>
<head>
    <body text="white"></body>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMIcalc</title>
</head>
<body>
    <div class="calculator-container">
        <h1>Calcul ton BMI</h1>
        <p>Hauteur en Centimètre:</p>
        <input class="height-input-field" type="text">
        <p>poids en kilograms:</p>
        <input class="weight-input-field" type="text">
        <button class="calculate"> Calcule</button>
    </div>
    <h3 class="result"></h3>
    <p class="result-statement"></p>
    <script>
        var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height2 = heightInput.value;
    height = height2/100
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = Math.round(BMI);

    if(BMI < 18.5){
        statement.innerText = "Ton BMI est sous la moyenne";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Ton BMI est à la moyenne";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Ton BMI est au dessus de la moyenne";
    }else{
        statement.innerText = "Ton BMI se trouve beaucoup au dessus de la moyenne";
      }
})
    </script>
</body>
</html>
