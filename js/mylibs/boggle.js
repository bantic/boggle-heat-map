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
  this.word_delay       = 50;
  this.letter_delay     = 20;
  this.dirs             = {};
  
  this.makeGrid = function() {
    for (var r = 0; r < this.rows; r++) {
      $('#grid').append("<div class='row'></div>");
      for (var c = 0; c < this.cols; c++) {
        var letter = this.boggle_tiles[r][c];
        var cur_row = $(".row").last();
        var inner_div = "<div id='" + r + "_" + c + "_inner' class='inner'></div>";
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

        var new_delay = this.letter_delay*i + delay;

        setTimeout(this.drawLine(x1,y1,x2,y2), new_delay);
      }

      setTimeout(this.addLetterToWord(current_point, next_point), new_delay);
      prev_point = current_point;
    }
  }  
  
  this.finishedWord = function() {
    $(".word.current").removeClass("current");
    $(".letter.current_word").removeClass("current_word");
    $(".letter.current").removeClass("current");
    this.drawing_paths = false;
  }
  
  this.newWord = function() {
    $("#words").append("<div class='word current'></div>");
    $("#words").scrollTop($("#words")[0].scrollHeight);
  }
  
  this.drawLine = function(x1,y1,x2,y2) {
    var that = this;
    return function() {
      that.ctx.strokeStyle = "rgba(7,90,242," + that.line_alpha_scale + ")";
      that.ctx.lineWidth = 2;
      that.ctx.beginPath();
      that.ctx.moveTo(x1,y1);
      that.ctx.lineTo(x2,y2);
      that.ctx.stroke();
    }
  }
  
  this.addLetterToWord = function(current_point, next_point) {
    var that = this;
    return function() {
      var letter = that.boggle_tiles[current_point[1]][current_point[0]];
      $(".word.current").append( letter );
      if ( !next_point ) {
        setTimeout(function() {that.finishedWord();}, that.word_delay);
      } else {
        that.updateLetterData(current_point, next_point);
      }
    }
  }
  
  this.tile_id = function(point) {
    return point[1] + "_" + point[0];
  }
  
  this.updateLetterData = function(current_point, next_point) {
    var dir_data = this.getDirectionsForTilePair(current_point, next_point, this.dirs);
    this.dirs[this.tile_id(current_point)] = dir_data;
    this.updateDirections(current_point, dir_data);
    // this.updateLetterBG(current_point, dir_data);
    this.updateLetterBGGradient(current_point, dir_data);
    this.highlightLetterPosition(current_point);
  }
  
  this.highlightLetterPosition = function(current_point) {
    $(".letter.current").removeClass("current").addClass("current_word");
    $("#" + this.tile_id(current_point)).addClass("current");
  }
  
  this.updateLetterBG = function(point, dir_data) {
    var letter = $("#" + this.tile_id(point));
    var bg_alpha = dir_data['total'] * this.bg_alpha_scale;
    letter.css("background-color", "rgba(255,0,0," + bg_alpha + ")");
  }
  
  this.updateLetterBGGradient = function(point, dir_data) {
    var letter = $("#" + this.tile_id(point));
    letter.css("background", gradientBG(dir_data, this.gradient_alpha_scale));
  }
  
  this.getDirectionsForTilePair = function(pointA, pointB, dir_collection) {
    var tile_id  = this.tile_id(pointA);
    var dir;
    if (typeof(dir_collection[tile_id]) == 'undefined') {
      dir = {n: 0, s: 0, e: 0, w: 0, se: 0, sw: 0, ne: 0, nw: 0, total: 0, max: 0};
    } else {
      dir = dir_collection[tile_id];
    }
    if (typeof(pointB) !== 'undefined') {
      var next_dir = this.getDir( pointA, pointB);
      dir[next_dir] += 1;
      dir['total']  += 1;
      dir['max']    = Math.max(dir['max'], dir[next_dir]);
    }
    
    return dir;
  }
  
  this.deriveDirections = function() {
    var dirs = {};

    for (var i = 0; i < this.boggle_paths.length; i++) {
      var cur_path = this.boggle_paths[i];
      for (var j = 0; j < cur_path.length; j++) {
        dirs[this.tile_id(cur_path[j])] = 
          this.getDirectionsForTilePair( cur_path[j], cur_path[j+1], dirs );
      }
    }

    return dirs;
  }

  this.getMaxFromDirs = function(dirs) {
    var max = 0;
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        // row first, col second
        var dir = dirs[r + "_" + c];
        var dir_max = (typeof(dir) === 'undefined') ? 0 : dir['max'];
        max = Math.max(max, dir_max);
      }
    }
    return max;
  }
  
  this.getMaxLetterTraversal = function(dirs) {
    var max = 0;
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        // row first, col second
        var dir = dirs[r + "_" + c];
        var dir_total = (typeof(dir) === 'undefined') ? 0 : dir['total'];
        
        max = Math.max(max, dir_total);
      }
    }
    return max;
  }
  
  this.htmlForDirections = function(single_dir_set) {
    var html = "";
    var dir_names = ['n','e','s','w','ne','se','nw','sw']
    for (var i = 0; i < dir_names.length; i++) {
      html = html + "<div class='" + dir_names[i] + "'>" + single_dir_set[dir_names[i]] + "</div>";
    }
    return html;
  }
  
  this.updateDirections = function(tile, dir) {
    var div_inner_id = this.tile_id(tile) + "_inner";
    var div_inner = $("#" + div_inner_id);
    div_inner.html(this.htmlForDirections(dir));
  }
  
  this.setUpDirectionsDivs = function(dirs) {
    for (var c = 0; c < this.cols; c++) {
      for (var r = 0; r < this.rows; r++) {
        var div_id = r + "_" + c;
        this.updateDirections([r,c], dirs[div_id]);
      }
    }
  }
  
  this.getDir = function(pointA, pointB) {
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
  
  this.derived_dirs     = this.deriveDirections(this.boggle_tiles);
  this.dir_max          = this.getMaxFromDirs(this.derived_dirs);
  this.letter_trav_max  = this.getMaxLetterTraversal(this.derived_dirs);
  this.line_alpha_scale = Math.max(1.0 / this.dir_max, 0.01);
  this.gradient_alpha_scale = 1.0 / this.dir_max;
  this.bg_alpha_scale   = 0.8 * (1.0 / this.letter_trav_max);
}

function gradientCSSString(alpha, dir) {
  var string = "-webkit-gradient(radial,";
  var dir_string;
  switch(dir) {
  case 'n':
    dir_string = "50% 0%";
    break;
  case 'e':
    dir_string = "100% 50%";
    break;
  case 'w':
    dir_string = "0% 50%";
    break;
  case 's':
    dir_string = "50% 100%";
    break;
  case 'ne':
    dir_string = "100% 0%";
    break;
  case 'nw':
    dir_string = "0% 0%";
    break;
  case 'sw':
    dir_string = "0% 100%";
    break;
  case 'se':
    dir_string = "100% 100%";
    break;
  }
  string += dir_string + ", 0, " + dir_string + ", 66, from(rgba(255,0,0," + alpha + ")), " +
            "to(rgba(255,255,255,0)))";
  return string;
}

function gradientBG(dir_data, scale) {
  // -webkit-gradient(
  //   radial, 100 100, 0, 100 100, 66, from(rgba(255,0,0,255)), to(rgba(255,255,255,0))
  // ),
  // -webkit-gradient(
  //   radial, 50 50, 0, 50 50, 66, from(rgba(0,0,255,255)), to(rgba(255,255,255,0))
  // ),
  // -webkit-gradient(
  //   radial, 0 50, 0, 0 50, 66, from(rgba(0,255,0,255)), to(rgba(255,255,255,0))
  // )
  var css_string = [];
  var dirs = ['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw'];
  for (var i = 0; i < dirs.length; i++) {
    var alpha = dir_data[dirs[i]] * scale;
    css_string.push(gradientCSSString(alpha, dirs[i]));
  }
  return css_string.join(",");
}

var bg = new BoggleVisualizer(boggle_tiles[3], boggle_paths[3].sort());
bg.makeGrid();