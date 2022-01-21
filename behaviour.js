const utils = require('./utils')

function move(init_point,movement){
  return utils.sumArray(init_point,movement)
}

function spin(giro, orientation){
  return utils.updateVector(giro, orientation[0], orientation[1])
}

function updateOrientation(instruction, orientation){ // to set the current orientation of the fover
  if(instruction == 'L'){
    var index = utils.orientationUpdate.indexOf(orientation) - 1;
    if(index < 0){
      index = 3
    }
    else;
  }
  else{
    var index = utils.orientationUpdate.indexOf(orientation) + 1;
    if(index > 3){
      index = 0
    }
  }
    return utils.orientationUpdate[index]
}

module.exports.move = move;
module.exports.spin = spin;
module.exports.updateOrientation = updateOrientation;
