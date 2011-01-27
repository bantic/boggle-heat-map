var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

/*
var boggle_tiles = [
  ["e","d","o","h"],
  ["o","i","n","l"],
  ["b","s","u","n"],
  ["l","r","u","f"]
];

var boggle_heats = [
    [0.129314786192684, 0.393611540443071, 0.357032457496136, 0.0], 
    [0.543019062339001, 1.0, 0.81246780010304, 0.367336424523442], 
    [0.446161772282329, 0.863987635239567, 0.824317362184441, 0.370427614631633], 
    [0.0453374549201443, 0.231324059763009, 0.319422977846471, 0.143225141679547]
];
*/

/*
var boggle_tiles = [["x","u","e","t"],["w","i","o","v"],["i","t","o","y"],["f","o","s","o"]];
var boggle_heats = [[0.0, 0.159278737791134, 0.296769346356123, 0.156273478587528], [0.117956423741548, 0.565740045078888, 1.0, 0.454545454545455], [0.192336589030804, 0.668670172802404, 0.788129226145755, 0.559729526671675], [0.154770848985725, 0.221637866265965, 0.227648384673178, 0.155522163786627]]
*/

var boggle_tiles = 
[["n", "u", "s", "l"],
 ["r", "x", "n", "i"],
 ["m", "u", "a", "i"],
 ["a", "s", "m", "g"]];
 
var boggle_heats = [[0.0, 0.264194669756663, 0.215527230590962, 0.141946697566628], [0.354577056778679, 0.229432213209733, 0.826187717265353, 0.384704519119351], [0.270567786790266, 1.0, 0.925260718424102, 0.473928157589803], [0.078215527230591, 0.410776361529548, 0.422363847045191, 0.115295480880649]]

function drawHeatRects(ctx, boggle_heats) {
  var x, y, text_x, text_y;

  var rows = boggle_heats.length;
  var cols = boggle_heats[0].length;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  
  for (var col = 0; col < cols; col++) {
    for (var row = 0; row < rows; row++) {
       x = col * col_width;
       y = row * row_height;
       ctx.fillStyle = "rgba(255,0,0," + boggle_heats[col][row] + ")";
       ctx.fillRect(x,y, col_width, row_height);
    }
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

drawHeatRects(context, boggle_heats);
drawGrid(context, boggle_tiles);