
var boggle_tiles = [["n","u","s","l"],["r","x","n","i"],["m","u","a","i"],["a","s","m","g"]];
var boggle_heats = [[0.0344827586206897,0.229885057471264,0.229885057471264,0.218390804597701],[0.206896551724138,0.0,0.701149425287356,0.505747126436782],[0.310344827586207,0.96551724137931,1.0,0.505747126436782],[0.103448275862069,0.425287356321839,0.367816091954023,0.114942528735632]];
var boggle_paths = [[[1,0],[0,0],[0,1],[1,2],[2,1]],[[1,0],[0,1],[1,2],[1,3]],[[1,0],[2,1],[2,2],[2,3],[3,2]],[[1,0],[2,1],[2,2],[1,2]],[[1,0],[2,1],[1,2],[0,1],[0,0]],[[2,0],[2,1],[2,2],[3,3]],[[2,0],[2,1],[2,2],[3,1],[3,0]],[[2,0],[2,1],[1,2],[0,2]],[[2,0],[2,1],[1,2],[2,3]],[[2,0],[2,1],[1,2],[0,1]],[[2,0],[2,1],[3,2],[3,3]],[[2,0],[2,1],[1,0],[0,1]],[[2,0],[1,0],[0,1],[0,2],[0,3]],[[2,0],[3,1],[2,1],[2,2]],[[2,0],[3,1],[2,1],[1,2],[1,3]],[[2,0],[3,1],[2,2],[2,3]],[[3,0],[3,1],[3,2],[2,1]],[[3,0],[3,1],[2,1],[2,2]],[[3,0],[3,1],[2,1],[1,2],[1,3]],[[3,0],[3,1],[2,1],[1,2],[0,2]],[[3,0],[3,1],[2,1],[1,2],[2,3]],[[3,0],[3,1],[2,1],[1,0],[2,0]],[[3,0],[3,1],[2,2],[1,3]],[[0,1],[1,2],[1,3],[2,3],[2,2]],[[0,1],[1,2],[1,3],[0,3]],[[0,1],[1,2],[1,3],[0,2],[0,3]],[[0,1],[1,2],[1,3],[2,2]],[[0,1],[1,2],[2,3],[2,2],[2,1]],[[0,1],[1,0],[2,0],[3,1],[2,1]],[[1,1],[0,2],[0,3],[1,3]],[[2,1],[3,1],[2,2],[1,3]],[[2,1],[2,2],[3,2],[3,3]],[[2,1],[2,2],[1,3],[1,2],[0,3]],[[2,1],[2,2],[3,1],[3,0]],[[2,1],[2,2],[3,1],[2,0]],[[2,1],[1,2],[0,2],[0,3]],[[2,1],[1,2],[2,3],[2,2]],[[2,1],[3,2],[2,2],[1,3]],[[3,1],[2,1],[1,2],[0,1],[0,0]],[[3,1],[2,1],[3,2],[2,2]],[[3,1],[2,1],[1,0],[0,1],[0,0]],[[3,1],[2,2],[2,1],[1,2],[1,3]],[[3,1],[2,2],[2,1],[1,0],[2,0]],[[3,1],[2,0],[1,0],[0,1],[1,2],[1,3]],[[0,2],[1,2],[1,3],[0,3]],[[0,2],[1,2],[1,3],[2,2]],[[0,2],[1,2],[2,1],[3,1],[2,2]],[[0,2],[1,2],[2,1],[3,2],[2,2]],[[0,2],[0,3],[1,3],[1,2]],[[0,2],[0,3],[1,3],[2,2]],[[0,2],[0,3],[1,3],[2,2],[3,2]],[[0,2],[0,3],[1,3],[2,2],[3,1]],[[0,2],[0,3],[1,2],[1,1]],[[0,2],[0,3],[1,2],[2,1]],[[1,2],[0,1],[1,0],[2,0]],[[1,2],[2,1],[2,2],[2,3],[3,2]],[[1,2],[2,1],[2,0],[1,0],[0,0]],[[1,2],[2,1],[1,0],[0,1],[0,0]],[[2,2],[3,2],[2,1],[1,2]],[[2,2],[3,2],[2,1],[1,0]],[[2,2],[2,3],[3,2],[2,1]],[[2,2],[2,3],[3,2],[2,1],[3,1]],[[2,2],[2,1],[3,1],[3,0]],[[2,2],[2,1],[3,1],[2,0]],[[2,2],[2,1],[2,0],[1,0]],[[2,2],[2,1],[1,2],[1,3]],[[2,2],[2,1],[3,2],[2,3],[1,2],[1,3]],[[2,2],[2,1],[1,0],[2,0]],[[2,2],[3,1],[2,1],[1,2]],[[2,2],[3,1],[2,1],[1,0]],[[3,2],[2,2],[2,1],[1,2],[1,3]],[[3,2],[2,2],[2,1],[1,0],[2,0]],[[3,2],[2,1],[3,1],[2,2]],[[3,2],[2,1],[1,2],[0,1],[0,0]],[[3,2],[2,1],[1,0],[0,1],[0,0]],[[0,3],[0,2],[1,2],[2,1],[2,2],[2,3]],[[0,3],[1,2],[2,3],[2,2],[3,1],[3,0]],[[1,3],[2,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[0,2]],[[1,3],[0,3],[1,2],[2,3]],[[1,3],[0,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[2,1],[2,2]],[[1,3],[1,2],[0,1],[0,2],[0,3]],[[1,3],[0,2],[1,2],[0,1]],[[1,3],[2,2],[3,2],[2,3]],[[1,3],[2,2],[3,2],[2,1]],[[1,3],[2,2],[1,2],[0,2]],[[1,3],[2,2],[1,2],[2,3]],[[1,3],[2,2],[1,2],[0,1]],[[1,3],[2,2],[2,1],[2,0]],[[1,3],[2,2],[2,1],[2,0],[3,1]],[[1,3],[2,2],[3,1],[2,1]],[[1,3],[2,2],[3,1],[3,0]],[[2,3],[2,2],[3,2],[2,1]],[[2,3],[2,2],[3,2],[2,1],[2,0]],[[2,3],[2,2],[1,2],[1,1]],[[2,3],[2,2],[1,2],[2,1]],[[2,3],[2,2],[2,1],[3,1]],[[2,3],[2,2],[2,1],[3,1],[2,0]],[[2,3],[2,2],[2,1],[1,1]],[[2,3],[2,2],[2,1],[2,0]],[[2,3],[2,2],[2,1],[1,2],[1,3]],[[2,3],[2,2],[2,1],[1,2],[0,2],[0,3]],[[2,3],[2,2],[2,1],[3,2]],[[2,3],[2,2],[2,1],[1,0],[2,0]],[[2,3],[2,2],[1,3],[0,3]],[[2,3],[2,2],[1,3],[1,2]],[[2,3],[2,2],[3,3],[3,2]],[[2,3],[2,2],[3,1],[2,1]],[[2,3],[2,2],[3,1],[2,1],[2,0]],[[2,3],[2,2],[3,1],[3,0]],[[2,3],[1,2],[1,3],[0,3]],[[2,3],[1,2],[1,3],[2,2]],[[2,3],[1,2],[2,1],[3,1],[2,2]],[[2,3],[1,2],[2,1],[3,2],[2,2]],[[2,3],[3,2],[2,2],[2,1]],[[2,3],[3,2],[2,2],[1,3]],[[2,3],[3,2],[2,2],[1,3],[0,2]],[[2,3],[3,2],[2,2],[1,3],[0,2],[0,3]],[[2,3],[3,2],[2,1],[2,2]],[[2,3],[3,2],[2,1],[1,1]],[[2,3],[3,2],[2,1],[1,2],[1,3]],[[2,3],[3,2],[2,1],[1,0],[2,0]],[[3,3],[2,2],[3,2],[2,1]],[[3,3],[2,2],[3,2],[2,1],[2,0]],[[3,3],[2,2],[2,3],[3,2],[2,1]],[[3,3],[2,2],[1,2],[1,3]],[[3,3],[2,2],[1,2],[0,2]],[[3,3],[2,2],[1,2],[2,3]],[[3,3],[2,2],[1,2],[0,1]],[[3,3],[2,2],[1,2],[2,1]],[[3,3],[2,2],[3,1],[2,1]],[[3,3],[2,2],[3,1],[2,1],[2,0]],[[3,3],[2,2],[3,1],[3,0]]];

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

function setUpDirectionsDivs(__dirs) {
  function htmlForDirections(_dirs) {
    var html = "";
    var dir_names = ['n','e','s','w','ne','se','nw','sw']
    for (var i = 0; i < dir_names.length; i++) {
      html = html + "<div class='" + dir_names[i] + "'>" + _dirs[dir_names[i]] + "</div>";
    }
    return html;
  }
  for (var i = 0; i < boggle_tiles.length; i++) {
    for (var j = 0; j < boggle_tiles.length; j++) {
      var div_id = i + "_" + j;
      var div_inner_id = div_id + "_inner";
      var div_inner = $("#" + div_inner_id);
      div_inner.html(htmlForDirections(__dirs[div_id]));
    }
  }
}

function deriveDirections(boggle_paths) {
  var __dirs = {};
  var empty_dirs = {n: 0, s: 0, e: 0, w: 0, se: 0, sw: 0, ne: 0, nw: 0};
  
  for (var i = 0; i < boggle_paths.length; i++) {
    var cur_path = boggle_paths[i];
    for (var j = 0; j < cur_path.length; j++) {
      var cur_tile = cur_path[j];
      var tile_id  = cur_tile[1] + "_" + cur_tile[0];
      if (typeof(__dirs[tile_id]) == 'undefined') {
        __dirs[tile_id] = {n: 0, s: 0, e: 0, w: 0, se: 0, sw: 0, ne: 0, nw: 0};
      }
      var next_tile = cur_path[j + 1];
      if (typeof(next_tile) !== 'undefined') {
        var __dir = getDir( cur_tile, next_tile);
        __dirs[tile_id][__dir] += 1;
      }
    }
  }
  
  return __dirs;
}

function getMaxFromDirs(dirs) {
  
}

function logLater(msg, delay) {
  setTimeout(function() {console.log(msg)}, delay);
}

function BoggleVisualizer(boggle_tiles, boggle_paths) {
  this.boggle_tiles = boggle_tiles;
  this.boggle_paths = boggle_paths;
  this.rows         = boggle_tiles.length;
  this.cols         = boggle_tiles[0].length;
  
  this.canvas = document.getElementById('canvas_layer1');
  this.ctx    = this.canvas.getContext('2d');
  
  this.drawing_paths    = false;
  this.current_path_idx = 0;
  this.time_factor      = 10;
  
  
  this.makeGrid = function() {
    for (var r = 0; r < this.rows; r++) {
      $('#grid').append("<div class='row'></div>");
      for (var c = 0; c < this.cols; c++) {
        var letter = this.boggle_tiles[r][c];
        var cur_row = $(".row").last();
        var inner_div = "<div id='" + r + "_" + c + "_inner' class='inner'>hello</div>";
        cur_row.append("<div class='letter' id='" + r + "_" + c + "'>" + letter.toUpperCase() + inner_div + "</div>");
        $("#" + r + "_" + c).mouseover(function() {
          var id = $(this).attr("id");
          $("#" + id + "_inner").show();
        }).mouseout(function() {
          var id = $(this).attr("id");
          $("#" + id + "_inner").hide();
        });
      }
    }
  }
  
  this.drawPathsHelper = function() {
    var that = this;
    return function() {
      that.drawPaths();
    }
  }
  
  this.drawPaths = function() {
    if (this.drawing_paths) {
      setTimeout(this.drawPathsHelper(), 50);
      return;
    }
    if (this.boggle_paths[this.current_path_idx]) {
      this.drawPath(this.boggle_paths[this.current_path_idx]);
      this.current_path_idx++;
      setTimeout(this.drawPathsHelper(), 50);
    }
  }
  
  this.drawPath = function(path, delay) {
    this.newWord();
    this.drawing_paths = true;
    delay = delay || 0;
    var row_height = 100;
    var col_width  = 100;
    var last_point = null;

    this.ctx.strokeStyle = "rgba(255,0,0,0.1)";

    var next_point, prev_point;
    for (var i = 0; i < path.length; i++) {
      var current_point = path[i];
      var next_point    = path[i+1];

      if (i > 0) {
        var prev_point = path[i-1];
        var x1 = (prev_point[0] * col_width)  + (col_width  / 2);
        var y1 = (prev_point[1] * row_height) + (row_height / 2);

        var x2 = (current_point[0] * col_width) + (col_width / 2);
        var y2 = (current_point[1] * row_height) + (row_height / 2);

        var new_delay = this.time_factor*i + delay;

        setTimeout(this.drawLine(x1,y1,x2,y2), new_delay);
      }

      setTimeout(this.addLetterToWord(current_point, next_point), new_delay);
      setTimeout(this.highlightLetterPosition(current_point[0], current_point[1]), new_delay);
      prev_point = current_point;
    }
  }  
  
  this.newWord = function() {
    $(".word.current").removeClass("current");
    $(".letter.current_word").removeClass("current_word");
    $(".letter.current").removeClass("current");
    $("#words").append("<div class='word current'></div>");
  }
  
  this.drawLine = function(x1,y1,x2,y2) {
    var ctx = this.ctx;
    return function() {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    }
  }
  
  this.addLetterToWord = function(current_point, next_point) {
    var that = this;
    return function() {
      var letter = that.boggle_tiles[current_point[1]][current_point[0]];
      $(".word.current").append( letter );
      if ( !next_point ) {
        that.drawing_paths = false;
      }
    }
  }

  this.highlightLetterPosition = function(row, column) {
    var that = this;
    return function() {
      $(".letter.current").removeClass("current").addClass("current_word");
      $("#" + column + "_" + row).addClass("current");
      that.heatLetter(row, column);
    }
  }
  
  this.heatLetter = function(row, column) {
    var letter = $("#" + column + "_" + row);
    var bg = letter.css("background-color");
    var scale = 1.0 / this.boggle_paths.length;
    bg = bg.split(",").pop().replace(" ","").replace(")","");
    bg = parseFloat(bg,10) + scale;
    bg = "rgba(255,0,0," + bg + ")";
    letter.css("background-color", bg);
  }
  
}

var bg = new BoggleVisualizer(boggle_tiles, boggle_paths);
bg.makeGrid();
bg.drawPaths();