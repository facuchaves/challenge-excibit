import { getAngleByCardinal } from '../cardinal_orientation';
import { Coordinate } from '../coordinate';
import { Position } from '../position';
import { Robot } from '../robot';
import { valid_orientations } from './instruction-constants';
import { Parser } from './parser';

export class RobotParser extends Parser<Robot> {
  validate = async (line: string): Promise<boolean> => {
    const splittedLine = line.split(' ');

    if (splittedLine.length != 3) {
      return false;
    }

    if (isNaN(parseInt(splittedLine[0])) || isNaN(parseInt(splittedLine[1]))) {
      return false;
    }

    if (!valid_orientations.includes(splittedLine[2])) {
      return false;
    }

    return true;
  };

  parse = async (line: string): Promise<Robot> => {
    const splittedLine = line.split(' ');
    const coordinateX = parseInt(splittedLine[0]);
    const coordinateY = parseInt(splittedLine[1]);
    const angle = getAngleByCardinal(splittedLine[2]);

    const robot = new Robot();
    // robot.id = 1;

    let position = new Position();
    position.coordinate = new Coordinate(coordinateX, coordinateY);
    position.angle = angle;

    robot.position = position;

    return robot;
  };
}
