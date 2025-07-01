console.clear();

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const letters = [...alphabet, ...alphabet.map(letter => letter.toUpperCase())];

const numbers = [0,1,2,3,4,5,6,7,8,9];

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];


let specialCharactersCount = 6;
let letterCount = 6;
let numbersCount = 6;

let resultLetters = "";
let resultNumbers = "";
let resultSpecials = "";

let resultString = "";




// ✅ special characters change:
function hadleSpecialCharactersChange() {

        const specialsRange = document.getElementById('specialsRange');
        const specialsValue = specialsRange.value;

        specialCharactersCount = parseInt(specialsValue, 10);

        const specialsCount = document.getElementById('specialsCount');
        specialsCount.textContent = "Special Characters: " + specialsValue;


        selectRandomSpecialCharaters();
        generateRandomPassword();



}


// ✅ select specials:
function selectRandomSpecialCharaters () {

        // specialCharacters (array)
        // specialCharactersCount (random number to choose)

        const selectedSpecialCharacters = [];
        for (let i = 0; i < specialCharactersCount; i++) {
            const randomIndex = Math.floor(Math.random() * specialCharacters.length);
            selectedSpecialCharacters.push(specialCharacters[randomIndex]);
        }


        // display special characters in id="resultSpecials":
        // const resultSpecials = document.getElementById('resultSpecials');
        // resultSpecials.textContent = "Special characters: " + selectedSpecialCharacters.join('');


        return selectedSpecialCharacters.join('');









}






// ✅ letters change:
function handleLetterChange () {

        // get value from slider id="lettersRange"
        const lettersRange = document.getElementById('lettersRange');
        const lettersValue = lettersRange.value;

        letterCount = parseInt(lettersValue, 10);

        const lettersCount = document.getElementById('lettersCount');
        lettersCount.textContent = "Letters: " + lettersValue;

        selectRandomLetters();
        generateRandomPassword();







}

// ✅ select random letters:
function selectRandomLetters () {
        //select random elements from array letters based on letterCount

        const selectedLetters = [];

        for (let i = 0; i < letterCount; i++) {
                const randomIndex = Math.floor(Math.random() * letters.length);
                selectedLetters.push(letters[randomIndex]);
        }

        // display letters in id="resultLetters":
        // const resultLetters = document.getElementById('resultLetters');
        // resultLetters.textContent = "Letters: " + selectedLetters.join('');


        return selectedLetters.join('');
}









// ✅  numbers change:
function handleNumberChange () {
        // handle slider change with id="numbersRange"
        const numbersRange = document.getElementById('numbersRange');
        const numbersValue = numbersRange.value;

        numbersCount = parseInt(numbersValue, 10);


        const numbersCountDisplay = document.getElementById('numberCount');
        numbersCountDisplay.textContent = "Numbers " + numbersValue;

        selectRandomNumbers();
        generateRandomPassword();
}

// ✅ select random numbers:
function selectRandomNumbers () {

        // select from array numbers based on numbersCount
        const selectedNumbers = [];

        for (let i = 0; i < numbersCount; i++) {
                const randomIndex = Math.floor(Math.random() * numbers.length);
                selectedNumbers.push(numbers[randomIndex]);
        }

        // display numbers in id="resultNumbers":
        // const resultNumbers = document.getElementById('resultNumbers');
        // resultNumbers.textContent = "Numbers: " + selectedNumbers.join('');


        return selectedNumbers.join('');



}



















// on page load:
function onPageLoad (){

        // select random specials:
        selectRandomSpecialCharaters();

        // Select 6 random letters
        selectRandomLetters();

        // Select 6 random numbers
        selectRandomNumbers();

        generateRandomPassword();
}

onPageLoad();





function generateRandomPassword (){


        resultString=  selectRandomLetters()+ selectRandomNumbers()+selectRandomSpecialCharaters();


        // Scramble the resultString randomly
        resultString = resultString.split('').sort(() => Math.random() - 0.5).join('');


        let resultStringLength = resultString.length;




        // display passwords character count:
        let passwordLengthPara = document.getElementById("resultPasswordLength");
        passwordLengthPara.textContent = "Your password " + "("+ resultStringLength + "):";



        // display password:
        let displayResultString = document.getElementById("resultPassword");
        displayResultString.textContent = resultString;



}

// generateRandomPassword()


function handleRandomiser () {
        generateRandomPassword();
}




// copy to clipboard:
function copyToClipboard() {

        const passwordElement = document.getElementById("resultPassword");
        const passwordText = passwordElement.textContent;

        navigator.clipboard.writeText(passwordText).then(() => {
                console.log(passwordText);
        }).catch(err => {
                console.error("Failed to copy password: ", err);
        });
  }