import { MathHelper } from './utils/math.helper';

export class Coordinate {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  x: number;
  y: number;

  move = (angle: number): void => {
    const radians = MathHelper.convertDegreeToRadians(angle);
    this.x += Math.cos(radians);
    this.y += Math.sin(radians);
  };
}
