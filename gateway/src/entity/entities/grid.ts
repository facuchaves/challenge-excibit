import { Coordinate } from './coordinate';
import { Position } from './position';

export class Grid {
  constructor(dimentions_x: number, dimentions_y: number) {
    this.dimentions_x = dimentions_x;
    this.dimentions_y = dimentions_y;
  }

  map: Array<Coordinate>;
  dimentions_x: number;
  dimentions_y: number;
}
