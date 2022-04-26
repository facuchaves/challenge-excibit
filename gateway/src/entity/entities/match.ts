import { cardinal_orientation } from './cardinal_orientation';
import { Coordinate } from './coordinate';
import { Grid } from './grid';
import { Position } from './position';
import { Robot } from './robot';

export class Match {
  constructor() {}

  grid: Grid;
  robots: Array<Robot>;

  /**
   *
   * @returns
   *
   * 5 3
   * 1 1 E
   * RFRFRFRF
   *
   */
  play = async () => {
    this.grid = new Grid(5, 3);

    const robot = new Robot();
    robot.id = 1;

    let position = new Position();
    position.coordinate = new Coordinate(1, 1);
    position.angle = 0;

    robot.position = position;

    this.robots = [robot];

    robot.turnRight();
    robot.forward();

    robot.turnRight();
    robot.forward();

    robot.turnRight();
    robot.forward();

    robot.turnRight();
    robot.forward();

    console.log(robot.getAngle());
    console.log(cardinal_orientation[robot.getAngle()]);
    console.log(robot.getX());
    console.log(robot.getY());
  };
}
