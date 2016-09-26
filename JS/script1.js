document.addEventListener('DOMContentLoaded', init)

function init () {
}

var currentPlayer = 0

var smallbox = document.getElementsByClassName('smallbox')

// Declaring each box as a variable

console.log(smallbox)
for (var i = 0; i < smallbox.length; i++) {
  smallbox[i].addEventListener('click', function (event) {
    var target = event.target

    // 0 is always false. If current player === 0 is false, else statement will run.
    // box will show O. += ensures that every move will add 1 so that we will get X and O
    // sets what happens if user clicks the boxes
    if (currentPlayer === 0 || currentPlayer % 2 === 0) {
      this.classList.add('clickX')
      target.innerHTML = 'X'
      currentPlayer += 1
    } else {
      this.classList.add('clickO')
      target.innerHTML = 'O'
      currentPlayer += 1
    }


    // set up if/else statements to assign a value to each box

  Box1.addEventListener('click' function(event)){

    if (currentPlayer === 0 || currentPlayer % 2 ===0) {
      Box1=1;
    }
    else {
      Box1=2;
    }
  }


// Setting a value to each box with if/else statements

// function boxClick () {
//   if (currentPlayer == 0 || currentPlayer % 2 == 0)
//   // {this.classList.add('clickX')}
//   {this.textContent='X'
//   currentPlayer += 1;}
//
//   else
//   // {this.classList.add('clickO')}
//   {this.textContent='O';}
// }
