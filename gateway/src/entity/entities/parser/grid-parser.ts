import { getAngleByCardinal } from '../cardinal_orientation';
import { Coordinate } from '../coordinate';
import { Grid } from '../grid';
import { Position } from '../position';
import { Robot } from '../robot';
import { valid_orientations } from './instruction-constants';
import { Parser } from './parser';

export class GridParser extends Parser<Grid> {
  validate = async (line: string): Promise<boolean> => {
    const splittedLine = line.split(' ');

    if (splittedLine.length != 2) {
      return false;
    }

    const coordinateX = parseInt(splittedLine[0]);

    if (isNaN(coordinateX) || coordinateX < 0 || coordinateX > 50) {
      return false;
    }

    const coordinateY = parseInt(splittedLine[1]);

    if (isNaN(coordinateY) || coordinateY < 0 || coordinateY > 50) {
      return false;
    }

    return true;
  };

  parse = async (line: string): Promise<Grid> => {
    const splittedLine = line.split(' ');

    const coordinateX = parseInt(splittedLine[0]);
    const coordinateY = parseInt(splittedLine[1]);

    return new Grid(coordinateX, coordinateY);
  };
}
