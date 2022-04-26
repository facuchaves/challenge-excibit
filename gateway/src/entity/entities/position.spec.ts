import { Coordinate } from './coordinate';
import { Position } from './position';

describe('position', () => {
  let position: Position;

  beforeEach(() => {
    position = new Position();
    position.angle = 0;
    position.coordinate = new Coordinate(0, 0);
  });

  describe('Happy paths', () => {
    it(`turn left should modify angle`, async () => {
      position.turnLeft();
      expect(position.angle).toBe(90);
    });

    it(`turn left two times should modify angle`, async () => {
      position.turnLeft();
      position.turnLeft();
      expect(position.angle).toBe(180);
    });

    it(`turn right should modify angle`, async () => {
      position.turnRight();
      expect(position.angle).toBeCloseTo(270);
    });

    it(`turn right two times should modify angle`, async () => {
      position.turnRight();
      position.turnRight();
      expect(position.angle).toBeCloseTo(180);
    });

    it(`turn right and left should be same angle`, async () => {
      position.turnRight();
      position.turnLeft();
      expect(position.angle).toBe(0);
    });

    it(`forward should modify coordinate`, async () => {
      position.forward();
      expect(position.getX()).toBe(1);
      expect(position.getY()).toBe(0);
    });
  });
});
