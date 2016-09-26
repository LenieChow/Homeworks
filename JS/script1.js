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
    if (currentPlayer === 0 || currentPlayer % 2 === 0) {
      this.classList.add('clickX')
      target.innerHTML = 'X'
      currentPlayer += 1
    } else {
      this.classList.add('clickO')
      target.innerHTML = 'O'
      currentPlayer += 1
    }


    // check win condition
    
  }
  )
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
