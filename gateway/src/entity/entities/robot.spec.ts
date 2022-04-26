import { Coordinate } from './coordinate';
import { Position } from './position';
import { Robot } from './robot';

describe('robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
    robot.id = 1;

    let position = new Position();
    position.coordinate = new Coordinate(1, 1);
    position.angle = 0;

    robot.position = position;
  });

  describe('Happy paths', () => {
    it(`set lost should modify state`, async () => {
      robot.setLost();
      expect(robot.status).toBe('LOST');
    });
  });
});
