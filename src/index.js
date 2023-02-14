exports.createRobot = function (x, y, position) {
  let xValue = x;
  let yValue = y;
  let orientation = position; // dirección a la que apunta el robot "N", "E", "S", "W"

  function advance() {
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

  function right() {
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

  function left() {
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
          right();
          break;
        case "L":
          left();
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

  return { advance, left, right, instruction, getPosition };
};
