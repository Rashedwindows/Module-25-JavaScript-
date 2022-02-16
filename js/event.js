// first-system;

function ariyan(){

    document.body.style.backgroundColor=('red');
    
}


// second-system;

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick= makeBlue;


 function makeBlue(){

     document.body.style.backgroundColor='blue';
 }


//  third-system

const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor="green";
}

// fourth-system(handle by using addEventListener)

const goldenButton = document.getElementById('make-goldenRod-button');
goldenButton.addEventListener("click",goldenRonButtonMake);

function goldenRonButtonMake(){

    document.body.style.backgroundColor='goldenrod';
}


// fifth-system(addEventListener)

const hotPinkButton = document.getElementById("make-hotpink-button");
hotPinkButton.addEventListener('click', function makePinkButton(){

    document.body.style.backgroundColor='hotpink';
})

//add innerText in Button

function test(){

    const textHeading = document.getElementById("heading-id");

    textHeading.innerText = ('Hello I am a Mern Stack base Fullstack Web Developer');

}


// update text in input field

document.getElementById('update-name').addEventListener('click',function() {
    const name = document.getElementById('clicking-method');
    name.innerText =nameField.value;
    // input box k khali korte chaile eita add korte hobe....
    nameField.value = "";


})
   


