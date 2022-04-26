import { Coordinate } from './coordinate';

describe('coordinate', () => {
  let coordinate: Coordinate;

  beforeEach(() => {
    coordinate = new Coordinate(2, 2);
  });

  describe('Happy paths', () => {
    it(`increase x should increases x and not modify y`, async () => {
      coordinate.move(0);
      expect(coordinate.x).toBe(3);
      expect(coordinate.y).toBe(2);
    });

    it(`decrease x should decreases x and not modify y`, async () => {
      coordinate.move(180);
      expect(coordinate.x).toBe(1);
      expect(coordinate.y).toBe(2);
    });

    it(`increase y should increases y and not modify x`, async () => {
      coordinate.move(90);
      expect(coordinate.x).toBe(2);
      expect(coordinate.y).toBe(3);
    });

    it(`decrease y should decreases y and not modify x`, async () => {
      coordinate.move(270);
      expect(coordinate.x).toBe(2);
      expect(coordinate.y).toBe(1);
    });

    it(`decrease y and increase x`, async () => {
      coordinate.move(0);
      coordinate.move(270);
      expect(coordinate.x).toBe(3);
      expect(coordinate.y).toBe(1);
    });
  });
});
