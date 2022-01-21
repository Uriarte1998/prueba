const map_orient = new Map();
map_orient.set('N', [0,1]);
map_orient.set('E', [1,0]);
map_orient.set('S', [0,-1]);
map_orient.set('W', [-1,0]);

const orientationUpdate = ['N', 'E', 'S', 'W']

function updateVector(giro, x_cord, y_cord){ // vector Spin formula
  if(giro === 'L'){
    var ang = Math.PI/2;
  }
  else if(giro === 'R') {
    var ang = -Math.PI/2;
  }
  var a = (Math.cos(ang)*x_cord)+(-Math.sin(ang)*y_cord)
  var b = (Math.sin(ang)*x_cord)+(Math.cos(ang)*y_cord)
  return [Math.round(a),Math.round(b)]
}

function sumArray (arr1 , arr2){ 
  return [ arr1[0] + arr2[0] , arr1[1]+arr2[1] ]
}

module.exports.updateVector = updateVector;
module.exports.map_orient = map_orient;
module.exports.sumArray = sumArray;
module.exports.orientationUpdate = orientationUpdate;
