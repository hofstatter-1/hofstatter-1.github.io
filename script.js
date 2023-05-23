// Select the necessary elements from the HTML 

const select = document.querySelector('#operations'); 

const input1 = document.querySelector('#myNumber'); 

const input2 = document.querySelectorAll('#myNumber')[1]; 

const button = document.querySelector('button'); 

  

// Attach a click event listener to the button 

button.addEventListener('click', function() { 

  // Get the selected option from the dropdown menu 

  const option = select.value; 

   

  // Get the user inputs as numbers 

  const num1 = parseFloat(input1.value); 

  const num2 = parseFloat(input2.value); 

  

  // Determine which calculation to perform based on the selected option 

  switch(option) { 

    case 'M': 

let a = num1 / num2
      //document.write(`La masse molaire est ${num1 / num2} g/mol`); 
      document.getElementById("Output").innerHTML += " La masse molaire est "+ a +" g/mol"

      break; 

    case 'm': 
let b = num1 * num2
      //alert(`La masse de la substance est ${num1 * num2} g`); 
      document.getElementById("Output").innerHTML += " La masse de la substance est "+ b +" g"
      break; 

    case 'nm': 
let c = num1 / 6.02214076e23
      //alert(`Le nombre de mole est ${num1 / 6.02214076e23}`); 
      document.getElementById("Output").innerHTML += " Le nombre de mole est "+ c
      break; 

    case 'np': 
let d = num1 / 6.02214076e23
      //alert(`Le nombre de mole est ${num1 / 6.02214076e23 }`); 
      document.getElementById("Output").innerHTML += " Le nombre de mole est "+ d
      break; 

    case 'N': 
let e = num1 * 6.02214076e23
      //alert(`Le nombre de particules est ${num1 * 6.02214076e23}`); 
      document.getElementById("Output").innerHTML += " Le nombre de particules est "+ e
      break; 

    case 'Na': 

      //alert(`Le nombre d'avogadro est 6,022 140 76 710^23`); 
      document.getElementById("Output").innerHTML += " Le nombre d'avogadro est 6,022 140 76 710^23"
      break; 

    default: 

      alert('Veuillez choisir une option'); 

  } 

}); 