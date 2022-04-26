import { Coordinate } from './coordinate';

export class Position {
  constructor() {}

  coordinate: Coordinate;
  angle: number;

  turnLeft = (): void => {
    this.angle += 90;
  };
  turnRight = (): void => {
    this.angle -= 90;
  };
  forward = (): void => {
    this.coordinate.move(this.angle);
  };

  getX = (): number => {
    return this.coordinate.x;
  };

  getY = (): number => {
    return this.coordinate.y;
  };
}
