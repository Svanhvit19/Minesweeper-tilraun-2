var responseBoard;

var bombImage = '<img src="bomb.png">';
var flagImage = '<img src="flag.png">';

function doAjax() {

    var rows = document.getElementById('inputrow').value;
    var cols = document.getElementById('inputcols').value;
    var mines = document.getElementById('inputmines').value;



    //The URL to which we will send the request
    var url = 'https://veff213-minesweeper.herokuapp.com/api/v1/minesweeper';

    //Perform an AJAX POST request to the url, and set the param 'myParam' in the request body to paramValue
    axios.post(url, { rows: rows, cols: cols, mines: mines })
        .then(function (response) {
            //When successful, print 'Success: ' and the received data
            console.log("Success: ", response.data);
            responseBoard = response.data.board;
            drawBoard();
        })
        .catch(function (error) {
            //When unsuccessful, print the error.
            console.log(error);
        })
        .then(function () {
            // This code is always executed, independent of whether the request succeeds or fails.
        });
}

function drawBoard() {
  var htmlBoard = document.getElementById("board")
  for (var i=0; i<responseBoard.rows; i++) {
    var miniRow = document.createElement("div");

    for (var j=0; j<responseBoard.cols; j++) {
      var button = document.createElement("button");
      button.innerHTML="&nbsp";

      miniRow.appendChild(button);

    }
    htmlBoard.appendChild(miniRow);
  }
}
