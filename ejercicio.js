const behaviour = require('./behaviour.js')
const utils = require('./utils')


var init_point = [1,2] // Other: 3,3
var orientation = 'N' //Other: E
var instructions = "LMLMLMLMM" //Other: MMRMMRMRRM
var movement= utils.map_orient.get(orientation);


for (let i = 0; i < instructions.length; i++){
  if(instructions[i] == 'M'){
    init_point = behaviour.move(init_point,movement)
  }
  else{
    movement = behaviour.spin(instructions[i], utils.map_orient.get(orientation))
    orientation = behaviour.updateOrientation(instructions[i], orientation)

  }
}

console.log(init_point[0] + " " + init_point[1] + " " + orientation); // final output
