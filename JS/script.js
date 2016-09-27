document.addEventListener('DOMContentLoaded', init);

function init() {
  alert ("Lets start playing.A horizontal, vertical or diagonal row will make you the winner!")

    var currentPlayer = 1;




    var smallbox = document.getElementsByClassName('smallbox');
    for (var i = 0; i < smallbox.length; i++) {
        smallbox[i].addEventListener('click', boxClick)
    }
    // What happens when a box is clicked
    function boxClick() {

        console.log(this.className);
        if (currentPlayer === 1) {
            this.innerHTML = 'X';
            this.classList.add('clickX')
            if(checkWin("clickX")){
              alert("Player X won!");
              resetGame();
            }
          } else {
            this.innerHTML = 'O';
            this.classList.add('clickO')
            if(checkWin("clickO")){
              alert("Player O won!");
              resetGame();
            }

        }
        // calling function

        switchPlayer();

    }

    // How to switch between players
    function switchPlayer() {
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    }



    // Label all boxes to retrieve it
    var smallbox = document.getElementsByClassName('smallbox');
    var zero = document.getElementById("Box0");
    var one = document.getElementById("Box1");
    var two = document.getElementById("Box2");
    var three = document.getElementById("Box3");
    var four = document.getElementById("Box4");
    var five = document.getElementById("Box5");
    var six = document.getElementById("Box6");
    var seven = document.getElementById("Box7");
    var eight = document.getElementById("Box8");




    function checkWin(playerType) {
        var winner = false;
        //  if ( zero.classList.contains('clickX') &&  one.classList.contains('clickX') && two.classList.contains('clickX')){
        //      alert("Player 1 wins!");

        //check if clickX is class of box0 compare it with class of box1 then comapre it with class of Box2
        if (zero.classList.contains(playerType) && one.classList.contains(playerType) && two.classList.contains(playerType)) {
            winner = true;
            // alert(playerType + "wins!");

        }else if (three.classList.contains(playerType) && four.classList.contains(playerType) && five.classList.contains(playerType)) {
            winner = true;

        } else if (six.classList.contains(playerType) && seven.classList.contains(playerType) && eight.classList.contains(playerType)) {
            winner = true;

        } else if (zero.classList.contains(playerType) && three.classList.contains(playerType) && six.classList.contains(playerType)) {

            winner = true;

        } else if (one.classList.contains(playerType) && four.classList.contains(playerType) && seven.classList.contains(playerType)) {
            winner = true;
        }else if (two.classList.contains(playerType) && five.classList.contains(playerType) && eight.classList.contains(playerType)) {
          winner = true;
        } else if (zero.classList.contains(playerType) && four.classList.contains(playerType) && eight.classList.contains(playerType)) {
          winner = true;
        } else if (two.classList.contains(playerType) && four.classList.contains(playerType) && six.classList.contains(playerType)) {
          winner = true;
        }
        return winner;
      }


      var reset = document.querySelector("#btn")
          reset.addEventListener("click", resetGame)


          function resetGame(){
            location.reload();
          }
















}
