const { createRobot } = require("./robot");

describe("Test two paths", () => {
  it("Should output the final position for path RAALAL", () => {
    const myRobot = createRobot(7, 3, "N");
    myRobot.instruction("RAALAL");
    expect(myRobot.getPosition()).toMatchObject({
      position: [9, 4],
      orientation: "W",
    });
  });
  it("Should output the final position for path ARAARARALAALLLRRRA", () => {
    const myRobot = createRobot(7, 3, "N");
    myRobot.instruction("ARAARARALAALLLRRRA");
    expect(myRobot.getPosition()).toMatchObject({
      position: [8, 0],
      orientation: "S",
    });
  });
});
