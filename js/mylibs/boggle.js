var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var boggle_tiles = [["x","u","e","t"],["w","i","o","v"],["i","t","o","y"],["f","o","s","o"]];
var boggle_heats = [[0.0, 0.159278737791134, 0.296769346356123, 0.156273478587528], [0.117956423741548, 0.565740045078888, 1.0, 0.454545454545455], [0.192336589030804, 0.668670172802404, 0.788129226145755, 0.559729526671675], [0.154770848985725, 0.221637866265965, 0.227648384673178, 0.155522163786627]];

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