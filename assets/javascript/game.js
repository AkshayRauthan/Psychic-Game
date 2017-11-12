		var wins = 0;
		var losses = 0;
		var totalGuesses = 9;
		var guessesLeft = totalGuesses;
		var gussesSoFar = 0;

		//javascript function executes when the documents is loaded completely
		$(document).ready(function(){

			//setting the initials
			$("#wins").text(wins);
			$("#losses").text(losses);
			$("#guessesLeft").text(guessesLeft);
			$("#gussesSoFar").text(gussesSoFar);


			var generateArr = function(charA, charZ){
				var a = [];
				i = charA.charCodeAt(0);
				j = charZ.charCodeAt(0);
				for(; i<=j ; i++){
					a.push(String.fromCharCode(i));
				}
				return a;
			}

			document.onkeyup = function(event){
				//get the pressed key code
				var userChoice = event.key;
				
				//generate the alphabetic array
				var alphaArr = generateArr("a", "z");

				//code for generating computer's choice
				var compChoice = alphaArr[Math.floor(Math.random()*alphaArr.length)];

				console.log("User's Choice - " + userChoice + " Computers Choice - " + compChoice);

				//increment the guesses so far and decrement the guessesleft
				gussesSoFar++;
				$("#gussesSoFar").text(gussesSoFar);
				guessesLeft--;
				$("#guessesLeft").text(guessesLeft);
				
				if(userChoice===compChoice){
					wins++;
					$("#wins").text(wins);
					resetValues();
				}else{
					if(parseInt(guessesLeft)===0){
						losses++;
						$("#losses").text(losses);
						// guessesLeft = totalGuesses;
						// gussesSoFar = 0;
						// $("#guessesLeft").text(guessesLeft);
						// $("#gussesSoFar").text(gussesSoFar);
						resetValues();
					}
				}

			}

			var resetValues = function(){
				guessesLeft = totalGuesses;
				gussesSoFar = 0;
				$("#guessesLeft").text(guessesLeft);
				$("#gussesSoFar").text(gussesSoFar);				
			}


		});
