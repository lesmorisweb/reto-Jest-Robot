exports.createRobot = function (x, y, position) {
  let xValue = x;
  let yValue = y;
  let orientation = position; // dirección a la que apunta el robot "N", "E", "S", "W"

  function advance() {
    // función para avanzar
    switch (orientation) {
      case "N":
        yValue++;
        break;
      case "E":
        xValue++;
        break;
      case "S":
        yValue--;
        break;
      case "W":
        xValue--;
        break;
    }
  }

  function turnRight() {
    // función para girar a la derecha
    switch (orientation) {
      case "N":
        orientation = "E";
        break;
      case "E":
        orientation = "S";
        break;
      case "S":
        orientation = "W";
        break;
      case "W":
        orientation = "N";
        break;
    }
  }

  function turnLeft() {
    // función para girar a la izquierda
    switch (orientation) {
      case "N":
        orientation = "W";
        break;
      case "E":
        orientation = "N";
        break;
      case "S":
        orientation = "E";
        break;
      case "W":
        orientation = "S";
        break;
    }
  }

  function instruction(move) {
    // función para recibir una serie de instrucciones Ejm: "RAALAL"
    const pathArray = move.split("");

    pathArray.forEach((item) => {
      switch (item) {
        case "R":
          turnRight();
          break;
        case "L":
          turnLeft();
          break;
        case "A":
          advance();
          break;
      }
    });
  }

  function getPosition() {
    return { position: [xValue, yValue], orientation: orientation };
  }

  return { advance, turnLeft, turnRight, instruction, getPosition };
};

// const myRobot = createRobot(7, 3, "N");
// console.log(myRobot.getPosition());
// myRobot.instruction("RAALAL");
// console.log(myRobot.getPosition());
