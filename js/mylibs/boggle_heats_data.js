var boggle_tiles = [["n","u","s","l"],["r","x","n","i"],["m","u","a","i"],["a","s","m","g"]];
var boggle_heats = [[0.0344827586206897,0.229885057471264,0.229885057471264,0.218390804597701],[0.206896551724138,0.0,0.701149425287356,0.505747126436782],[0.310344827586207,0.96551724137931,1.0,0.505747126436782],[0.103448275862069,0.425287356321839,0.367816091954023,0.114942528735632]];
var boggle_paths = [[[1,0],[0,0],[0,1],[1,2],[2,1]],[[1,0],[0,1],[1,2],[1,3]],[[1,0],[2,1],[2,2],[2,3],[3,2]],[[1,0],[2,1],[2,2],[1,2]],[[1,0],[2,1],[1,2],[0,1],[0,0]],[[2,0],[2,1],[2,2],[3,3]],[[2,0],[2,1],[2,2],[3,1],[3,0]],[[2,0],[2,1],[1,2],[0,2]],[[2,0],[2,1],[1,2],[2,3]],[[2,0],[2,1],[1,2],[0,1]],[[2,0],[2,1],[3,2],[3,3]],[[2,0],[2,1],[1,0],[0,1]],[[2,0],[1,0],[0,1],[0,2],[0,3]],[[2,0],[3,1],[2,1],[2,2]],[[2,0],[3,1],[2,1],[1,2],[1,3]],[[2,0],[3,1],[2,2],[2,3]],[[3,0],[3,1],[3,2],[2,1]],[[3,0],[3,1],[2,1],[2,2]],[[3,0],[3,1],[2,1],[1,2],[1,3]],[[3,0],[3,1],[2,1],[1,2],[0,2]],[[3,0],[3,1],[2,1],[1,2],[2,3]],[[3,0],[3,1],[2,1],[1,0],[2,0]],[[3,0],[3,1],[2,2],[1,3]],[[0,1],[1,2],[1,3],[2,3],[2,2]],[[0,1],[1,2],[1,3],[0,3]],[[0,1],[1,2],[1,3],[0,2],[0,3]],[[0,1],[1,2],[1,3],[2,2]],[[0,1],[1,2],[2,3],[2,2],[2,1]],[[0,1],[1,0],[2,0],[3,1],[2,1]],[[1,1],[0,2],[0,3],[1,3]],[[2,1],[3,1],[2,2],[1,3]],[[2,1],[2,2],[3,2],[3,3]],[[2,1],[2,2],[1,3],[1,2],[0,3]],[[2,1],[2,2],[3,1],[3,0]],[[2,1],[2,2],[3,1],[2,0]],[[2,1],[1,2],[0,2],[0,3]],[[2,1],[1,2],[2,3],[2,2]],[[2,1],[3,2],[2,2],[1,3]],[[3,1],[2,1],[1,2],[0,1],[0,0]],[[3,1],[2,1],[3,2],[2,2]],[[3,1],[2,1],[1,0],[0,1],[0,0]],[[3,1],[2,2],[2,1],[1,2],[1,3]],[[3,1],[2,2],[2,1],[1,0],[2,0]],[[3,1],[2,0],[1,0],[0,1],[1,2],[1,3]],[[0,2],[1,2],[1,3],[0,3]],[[0,2],[1,2],[1,3],[2,2]],[[0,2],[1,2],[2,1],[3,1],[2,2]],[[0,2],[1,2],[2,1],[3,2],[2,2]],[[0,2],[0,3],[1,3],[1,2]],[[0,2],[0,3],[1,3],[2,2]],[[0,2],[0,3],[1,3],[2,2],[3,2]],[[0,2],[0,3],[1,3],[2,2],[3,1]],[[0,2],[0,3],[1,2],[1,1]],[[0,2],[0,3],[1,2],[2,1]],[[1,2],[0,1],[1,0],[2,0]],[[1,2],[2,1],[2,2],[2,3],[3,2]],[[1,2],[2,1],[2,0],[1,0],[0,0]],[[1,2],[2,1],[1,0],[0,1],[0,0]],[[2,2],[3,2],[2,1],[1,2]],[[2,2],[3,2],[2,1],[1,0]],[[2,2],[2,3],[3,2],[2,1]],[[2,2],[2,3],[3,2],[2,1],[3,1]],[[2,2],[2,1],[3,1],[3,0]],[[2,2],[2,1],[3,1],[2,0]],[[2,2],[2,1],[2,0],[1,0]],[[2,2],[2,1],[1,2],[1,3]],[[2,2],[2,1],[3,2],[2,3],[1,2],[1,3]],[[2,2],[2,1],[1,0],[2,0]],[[2,2],[3,1],[2,1],[1,2]],[[2,2],[3,1],[2,1],[1,0]],[[3,2],[2,2],[2,1],[1,2],[1,3]],[[3,2],[2,2],[2,1],[1,0],[2,0]],[[3,2],[2,1],[3,1],[2,2]],[[3,2],[2,1],[1,2],[0,1],[0,0]],[[3,2],[2,1],[1,0],[0,1],[0,0]],[[0,3],[0,2],[1,2],[2,1],[2,2],[2,3]],[[0,3],[1,2],[2,3],[2,2],[3,1],[3,0]],[[1,3],[2,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[0,2]],[[1,3],[0,3],[1,2],[2,3]],[[1,3],[0,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[2,1],[2,2]],[[1,3],[1,2],[0,1],[0,2],[0,3]],[[1,3],[0,2],[1,2],[0,1]],[[1,3],[2,2],[3,2],[2,3]],[[1,3],[2,2],[3,2],[2,1]],[[1,3],[2,2],[1,2],[0,2]],[[1,3],[2,2],[1,2],[2,3]],[[1,3],[2,2],[1,2],[0,1]],[[1,3],[2,2],[2,1],[2,0]],[[1,3],[2,2],[2,1],[2,0],[3,1]],[[1,3],[2,2],[3,1],[2,1]],[[1,3],[2,2],[3,1],[3,0]],[[2,3],[2,2],[3,2],[2,1]],[[2,3],[2,2],[3,2],[2,1],[2,0]],[[2,3],[2,2],[1,2],[1,1]],[[2,3],[2,2],[1,2],[2,1]],[[2,3],[2,2],[2,1],[3,1]],[[2,3],[2,2],[2,1],[3,1],[2,0]],[[2,3],[2,2],[2,1],[1,1]],[[2,3],[2,2],[2,1],[2,0]],[[2,3],[2,2],[2,1],[1,2],[1,3]],[[2,3],[2,2],[2,1],[1,2],[0,2],[0,3]],[[2,3],[2,2],[2,1],[3,2]],[[2,3],[2,2],[2,1],[1,0],[2,0]],[[2,3],[2,2],[1,3],[0,3]],[[2,3],[2,2],[1,3],[1,2]],[[2,3],[2,2],[3,3],[3,2]],[[2,3],[2,2],[3,1],[2,1]],[[2,3],[2,2],[3,1],[2,1],[2,0]],[[2,3],[2,2],[3,1],[3,0]],[[2,3],[1,2],[1,3],[0,3]],[[2,3],[1,2],[1,3],[2,2]],[[2,3],[1,2],[2,1],[3,1],[2,2]],[[2,3],[1,2],[2,1],[3,2],[2,2]],[[2,3],[3,2],[2,2],[2,1]],[[2,3],[3,2],[2,2],[1,3]],[[2,3],[3,2],[2,2],[1,3],[0,2]],[[2,3],[3,2],[2,2],[1,3],[0,2],[0,3]],[[2,3],[3,2],[2,1],[2,2]],[[2,3],[3,2],[2,1],[1,1]],[[2,3],[3,2],[2,1],[1,2],[1,3]],[[2,3],[3,2],[2,1],[1,0],[2,0]],[[3,3],[2,2],[3,2],[2,1]],[[3,3],[2,2],[3,2],[2,1],[2,0]],[[3,3],[2,2],[2,3],[3,2],[2,1]],[[3,3],[2,2],[1,2],[1,3]],[[3,3],[2,2],[1,2],[0,2]],[[3,3],[2,2],[1,2],[2,3]],[[3,3],[2,2],[1,2],[0,1]],[[3,3],[2,2],[1,2],[2,1]],[[3,3],[2,2],[3,1],[2,1]],[[3,3],[2,2],[3,1],[2,1],[2,0]],[[3,3],[2,2],[3,1],[3,0]]];


//////////////////////////////////////////////////////////////////////////////