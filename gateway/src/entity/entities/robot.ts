import { Position } from './position';

export class Robot {
  constructor() {}

  id: number;
  position: Position;
  status: string;

  turnLeft = (): void => {
    this.position.turnLeft();
  };
  turnRight = (): void => {
    this.position.turnRight();
  };
  forward = (): void => {
    this.position.forward();
  };

  getX = (): number => {
    return this.position.getX();
  };

  getY = (): number => {
    return this.position.getY();
  };

  getAngle = (): number => {
    return this.position.angle;
  };

  setLost = (): void => {
    this.status = 'LOST';
  };
}
