// var canvas2 = document.getElementById('canvas_layer2');
var canvas1 = document.getElementById('canvas_layer1');
// var context2 = canvas2.getContext('2d');
var context1 = canvas1.getContext('2d');

var boggle_tiles = [["n","u","s","l"],["r","x","n","i"],["m","u","a","i"],["a","s","m","g"]];
var boggle_heats = [[0.0344827586206897,0.229885057471264,0.229885057471264,0.218390804597701],[0.206896551724138,0.0,0.701149425287356,0.505747126436782],[0.310344827586207,0.96551724137931,1.0,0.505747126436782],[0.103448275862069,0.425287356321839,0.367816091954023,0.114942528735632]];
var boggle_paths = [[[1,0],[0,0],[0,1],[1,2],[2,1]],[[1,0],[0,1],[1,2],[1,3]],[[1,0],[2,1],[2,2],[2,3],[3,2]],[[1,0],[2,1],[2,2],[1,2]],[[1,0],[2,1],[1,2],[0,1],[0,0]],[[2,0],[2,1],[2,2],[3,3]],[[2,0],[2,1],[2,2],[3,1],[3,0]],[[2,0],[2,1],[1,2],[0,2]],[[2,0],[2,1],[1,2],[2,3]],[[2,0],[2,1],[1,2],[0,1]],[[2,0],[2,1],[3,2],[3,3]],[[2,0],[2,1],[1,0],[0,1]],[[2,0],[1,0],[0,1],[0,2],[0,3]],[[2,0],[3,1],[2,1],[2,2]],[[2,0],[3,1],[2,1],[1,2],[1,3]],[[2,0],[3,1],[2,2],[2,3]],[[3,0],[3,1],[3,2],[2,1]],[[3,0],[3,1],[2,1],[2,2]],[[3,0],[3,1],[2,1],[1,2],[1,3]],[[3,0],[3,1],[2,1],[1,2],[0,2]],[[3,0],[3,1],[2,1],[1,2],[2,3]],[[3,0],[3,1],[2,1],[1,0],[2,0]],[[3,0],[3,1],[2,2],[1,3]],[[0,1],[1,2],[1,3],[2,3],[2,2]],[[0,1],[1,2],[1,3],[0,3]],[[0,1],[1,2],[1,3],[0,2],[0,3]],[[0,1],[1,2],[1,3],[2,2]],[[0,1],[1,2],[2,3],[2,2],[2,1]],[[0,1],[1,0],[2,0],[3,1],[2,1]],[[1,1],[0,2],[0,3],[1,3]],[[2,1],[3,1],[2,2],[1,3]],[[2,1],[2,2],[3,2],[3,3]],[[2,1],[2,2],[1,3],[1,2],[0,3]],[[2,1],[2,2],[3,1],[3,0]],[[2,1],[2,2],[3,1],[2,0]],[[2,1],[1,2],[0,2],[0,3]],[[2,1],[1,2],[2,3],[2,2]],[[2,1],[3,2],[2,2],[1,3]],[[3,1],[2,1],[1,2],[0,1],[0,0]],[[3,1],[2,1],[3,2],[2,2]],[[3,1],[2,1],[1,0],[0,1],[0,0]],[[3,1],[2,2],[2,1],[1,2],[1,3]],[[3,1],[2,2],[2,1],[1,0],[2,0]],[[3,1],[2,0],[1,0],[0,1],[1,2],[1,3]],[[0,2],[1,2],[1,3],[0,3]],[[0,2],[1,2],[1,3],[2,2]],[[0,2],[1,2],[2,1],[3,1],[2,2]],[[0,2],[1,2],[2,1],[3,2],[2,2]],[[0,2],[0,3],[1,3],[1,2]],[[0,2],[0,3],[1,3],[2,2]],[[0,2],[0,3],[1,3],[2,2],[3,2]],[[0,2],[0,3],[1,3],[2,2],[3,1]],[[0,2],[0,3],[1,2],[1,1]],[[0,2],[0,3],[1,2],[2,1]],[[1,2],[0,1],[1,0],[2,0]],[[1,2],[2,1],[2,2],[2,3],[3,2]],[[1,2],[2,1],[2,0],[1,0],[0,0]],[[1,2],[2,1],[1,0],[0,1],[0,0]],[[2,2],[3,2],[2,1],[1,2]],[[2,2],[3,2],[2,1],[1,0]],[[2,2],[2,3],[3,2],[2,1]],[[2,2],[2,3],[3,2],[2,1],[3,1]],[[2,2],[2,1],[3,1],[3,0]],[[2,2],[2,1],[3,1],[2,0]],[[2,2],[2,1],[2,0],[1,0]],[[2,2],[2,1],[1,2],[1,3]],[[2,2],[2,1],[3,2],[2,3],[1,2],[1,3]],[[2,2],[2,1],[1,0],[2,0]],[[2,2],[3,1],[2,1],[1,2]],[[2,2],[3,1],[2,1],[1,0]],[[3,2],[2,2],[2,1],[1,2],[1,3]],[[3,2],[2,2],[2,1],[1,0],[2,0]],[[3,2],[2,1],[3,1],[2,2]],[[3,2],[2,1],[1,2],[0,1],[0,0]],[[3,2],[2,1],[1,0],[0,1],[0,0]],[[0,3],[0,2],[1,2],[2,1],[2,2],[2,3]],[[0,3],[1,2],[2,3],[2,2],[3,1],[3,0]],[[1,3],[2,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[0,2]],[[1,3],[0,3],[1,2],[2,3]],[[1,3],[0,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[2,1],[2,2]],[[1,3],[1,2],[0,1],[0,2],[0,3]],[[1,3],[0,2],[1,2],[0,1]],[[1,3],[2,2],[3,2],[2,3]],[[1,3],[2,2],[3,2],[2,1]],[[1,3],[2,2],[1,2],[0,2]],[[1,3],[2,2],[1,2],[2,3]],[[1,3],[2,2],[1,2],[0,1]],[[1,3],[2,2],[2,1],[2,0]],[[1,3],[2,2],[2,1],[2,0],[3,1]],[[1,3],[2,2],[3,1],[2,1]],[[1,3],[2,2],[3,1],[3,0]],[[2,3],[2,2],[3,2],[2,1]],[[2,3],[2,2],[3,2],[2,1],[2,0]],[[2,3],[2,2],[1,2],[1,1]],[[2,3],[2,2],[1,2],[2,1]],[[2,3],[2,2],[2,1],[3,1]],[[2,3],[2,2],[2,1],[3,1],[2,0]],[[2,3],[2,2],[2,1],[1,1]],[[2,3],[2,2],[2,1],[2,0]],[[2,3],[2,2],[2,1],[1,2],[1,3]],[[2,3],[2,2],[2,1],[1,2],[0,2],[0,3]],[[2,3],[2,2],[2,1],[3,2]],[[2,3],[2,2],[2,1],[1,0],[2,0]],[[2,3],[2,2],[1,3],[0,3]],[[2,3],[2,2],[1,3],[1,2]],[[2,3],[2,2],[3,3],[3,2]],[[2,3],[2,2],[3,1],[2,1]],[[2,3],[2,2],[3,1],[2,1],[2,0]],[[2,3],[2,2],[3,1],[3,0]],[[2,3],[1,2],[1,3],[0,3]],[[2,3],[1,2],[1,3],[2,2]],[[2,3],[1,2],[2,1],[3,1],[2,2]],[[2,3],[1,2],[2,1],[3,2],[2,2]],[[2,3],[3,2],[2,2],[2,1]],[[2,3],[3,2],[2,2],[1,3]],[[2,3],[3,2],[2,2],[1,3],[0,2]],[[2,3],[3,2],[2,2],[1,3],[0,2],[0,3]],[[2,3],[3,2],[2,1],[2,2]],[[2,3],[3,2],[2,1],[1,1]],[[2,3],[3,2],[2,1],[1,2],[1,3]],[[2,3],[3,2],[2,1],[1,0],[2,0]],[[3,3],[2,2],[3,2],[2,1]],[[3,3],[2,2],[3,2],[2,1],[2,0]],[[3,3],[2,2],[2,3],[3,2],[2,1]],[[3,3],[2,2],[1,2],[1,3]],[[3,3],[2,2],[1,2],[0,2]],[[3,3],[2,2],[1,2],[2,3]],[[3,3],[2,2],[1,2],[0,1]],[[3,3],[2,2],[1,2],[2,1]],[[3,3],[2,2],[3,1],[2,1]],[[3,3],[2,2],[3,1],[2,1],[2,0]],[[3,3],[2,2],[3,1],[3,0]]];


function drawHeatRects(ctx, boggle_heats) {
  var x, y, text_x, text_y;

  var rows = boggle_heats.length;
  var cols = boggle_heats[0].length;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  
  var drawHeatRect = function(col,row) {
    return function() {
      var x = col * col_width;
      var y = row * row_height;
      ctx.fillStyle = "rgba(255,0,0," + boggle_heats[col][row] + ")";
      ctx.fillRect(x,y, col_width, row_height);
    }
  }
  
  var i = 0;
  for (var col = 0; col < cols; col++) {
    i++;
    for (var row = 0; row < rows; row++) {
      i++;
       setTimeout(drawHeatRect(col,row), 100*i);
    }
  }
}

function drawLine(ctx, x1,y1,x2,y2) {
  return function() {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }
}

function addLetterToWord(letter, last_letter) {
  return function() {
    $(".word.current").append( letter );
    if (last_letter) {
      console.log("last letter!");
      drawing_paths = false;
    }
  }
}


function drawPath(ctx, path, delay) {
  console.log("starting new path");
  newWord();
  drawing_paths = true;
  delay = delay || 0;
  var rows = 4;
  var cols = 4;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  var last_point = null;

  ctx.strokeStyle = "rgba(255,0,0,0.3)";


  for (var i = 0; i < path.length; i++) {
    if (last_point) {
      var x1 = (last_point[0] * col_width) + (col_width / 2);
      var y1 = (last_point[1] * row_height) + (row_height / 2);

      var x2 = (path[i][0] * col_width) + (col_width / 2);
      var y2 = (path[i][1] * row_height) + (row_height / 2);

      var new_delay = 500*i + delay;

      logLater(x1 + ", " + y1 + ". " + x2 + ", " + y2, new_delay);
      setTimeout(drawLine(ctx, x1,y1,x2,y2), new_delay);
    }
    var letter = boggle_tiles[path[i][1]][path[i][0]];
    var last_letter = (typeof(path[i+1]) === 'undefined');
    logLater("add letter " + letter, new_delay);
    setTimeout(addLetterToWord(letter, last_letter), new_delay);
    last_point = path[i];
  }
}

function newWord() {
  $(".word.current").removeClass("current");
  $("#words").append("<div class='word current'></div>");
}

function drawPathsHelper(ctx, paths) {
  return function() {
    drawPaths(ctx, paths);
  }
}

function drawPaths(ctx, paths) {
  if (drawing_paths) {
    setTimeout(drawPathsHelper(ctx, paths), 100);
    return;
  } else {
    console.log("ok to draw!");
  }
  if (paths[current_path]) {
    drawPath(ctx, paths[current_path]);
    current_path++;
    setTimeout(drawPathsHelper(ctx, paths), 100);
  }
}

function drawGrid(ctx, boggle_tiles) {
  var x, y, text_x, text_y;

  var rows = boggle_tiles.length;
  var cols = boggle_tiles[0].length;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.font = "normal 48px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (var col = 0; col < cols; col++) {
    for (var row = 0; row < rows; row++) {
       x = col * col_width;
       y = row * row_height;
       ctx.strokeRect(x,y, col_width, row_height);
       text_x = col * col_width + (col_width / 2);
       text_y = row * row_height + (row_height / 2);
       ctx.fillText(boggle_tiles[row][col], text_x, text_y);
    }
  }
}

function makeGrid(boggle_tiles) {
  var rows = boggle_tiles.length;
  var cols = boggle_tiles[0].length;
  for (var r = 0; r < rows; r++) {
    $('#grid').append("<div class='row'></div>");
    for (var c = 0; c < cols; c++) {
      var letter = boggle_tiles[r][c];
      var cur_row = $(".row").last();
      cur_row.append("<div class='letter' id='" + c + "_" + r + "'>" + letter.toUpperCase() + "</div>");
    }
  }
}

function logLater(msg, delay) {
  setTimeout(function() {console.log(msg)}, delay);
}

// drawGrid(context2, boggle_tiles);
var current_path = 0;
var drawing_paths = false;
setTimeout(drawPathsHelper(context1, boggle_paths), 1000);
makeGrid(boggle_tiles);