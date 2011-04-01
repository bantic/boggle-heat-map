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

function getDir(pointA, pointB) {
  var diff_x = pointB[0] - pointA[0];
  var diff_y = pointB[1] - pointA[1];
  
  switch(diff_y)
  {
  case 1:
    // S
    switch(diff_x) {
    case 1:
      return "se";
    case 0:
      return "s";
    case -1:
      return "sw";
    }
  case -1:
    // N
    switch(diff_x) {
    case 1:
      return "ne";
    case 0:
      return "n";
    case -1:
      return "nw";
    }
  case 0:
    switch(diff_x) {
    case 1:
      return "e";
    case -1:
      return "w";
    }
  }
}

var dirs = {};

function addLetterToWord(current_point, next_point) {
  return function() {
    var letter = boggle_tiles[current_point[1]][current_point[0]];
    $(".word.current").append( letter );
    if ( !next_point ) {
      drawing_paths = false;
    } else {
      var letter_id = current_point[1] + "_" + current_point[0]
      var _dirs = dirs[letter_id];
      if (typeof(_dirs) == 'undefined') {
        _dirs = {n: 0, s: 0, e: 0, w: 0, se: 0, sw: 0, ne: 0, nw: 0};
        dirs[letter_id] = _dirs;
      }
      var dir = getDir(current_point, next_point);
      dirs[letter_id][dir] += 1;
    }
  }
}

function highlightLetterPosition(row, column) {
  return function() {
    $(".letter.current").removeClass("current").addClass("current_word");
    $("#" + column + "_" + row).addClass("current");
    heatLetter(row, column);
  }
}

function heatLetter(row, column) {
  var letter = $("#" + column + "_" + row);
  var bg = letter.css("background-color");
  var scale = 1.0 / boggle_paths.length;
  var a = bg.split(",").pop();
  var b = a.replace(" ","").replace(")","");
  bg = parseFloat(b,10);
  bg = bg + scale;
  var bg = "rgba(255,0,0," + bg + ")";
  letter.css("background-color", bg);
}

var time_factor = 10;

function drawPath(ctx, path, delay) {
  newWord();
  drawing_paths = true;
  delay = delay || 0;
  var rows = 4;
  var cols = 4;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  var last_point = null;

  var scale = 1.0 / boggle_paths.length;

  ctx.strokeStyle = "rgba(255,0,0,0.1)";


  var next_point, prev_point;
  for (var i = 0; i < path.length; i++) {
    var current_point = path[i];
    var next_point    = path[i+1];

    if (i > 0) {
      var prev_point = path[i-1];
      var x1 = (prev_point[0] * col_width) + (col_width / 2);
      var y1 = (prev_point[1] * row_height) + (row_height / 2);

      var x2 = (current_point[0] * col_width) + (col_width / 2);
      var y2 = (current_point[1] * row_height) + (row_height / 2);

      var new_delay = time_factor*i + delay;

      setTimeout(drawLine(ctx, x1,y1,x2,y2), new_delay);
    }

    setTimeout(addLetterToWord(current_point, next_point), new_delay);
    setTimeout(highlightLetterPosition(path[i][0], path[i][1]), new_delay);
    prev_point = current_point;
  }
}

function newWord() {
  $(".word.current").removeClass("current");
  $(".letter.current_word").removeClass("current_word");
  $(".letter.current").removeClass("current");
  $("#words").append("<div class='word current'></div>");
}

function drawPathsHelper(ctx, paths) {
  return function() {
    drawPaths(ctx, paths);
  }
}

function drawPaths(ctx, paths) {
  if (drawing_paths) {
    setTimeout(drawPathsHelper(ctx, paths), 10);
    return;
  }
  if (paths[current_path]) {
    drawPath(ctx, paths[current_path]);
    current_path++;
    setTimeout(drawPathsHelper(ctx, paths), 10);
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
      cur_row.append("<div class='letter' id='" + r + "_" + c + "'>" + letter.toUpperCase() + "</div>");
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