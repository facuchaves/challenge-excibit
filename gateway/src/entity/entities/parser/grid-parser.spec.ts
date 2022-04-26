import { GridParser } from './grid-parser';

describe('grid-parser', () => {
  let gridParser: GridParser;

  beforeEach(() => {
    gridParser = new GridParser();
  });

  describe('Happy paths', () => {
    it(`should validate a correct line`, async () => {
      expect(await gridParser.validate('1 1')).toBeTruthy();
    });

    it(`should parse a correct line`, async () => {
      const grid = await gridParser.parse('1 1');
      expect(grid.dimentions_x).toBe(1);
      expect(grid.dimentions_y).toBe(1);
    });
  });

  describe('Invalid cases', () => {
    it(`should validate a empty line`, async () => {
      expect(await gridParser.validate('')).toBeFalsy();
    });

    it(`should validate a line with more than 2 values`, async () => {
      expect(await gridParser.validate('1 1 0')).toBeFalsy();
    });

    it(`should validate a invalid number in line`, async () => {
      expect(await gridParser.validate('a 1')).toBeFalsy();
    });

    it(`should validate a invalid number second place in line`, async () => {
      expect(await gridParser.validate('1 a')).toBeFalsy();
    });

    it(`should validate x bigger than 0`, async () => {
      expect(await gridParser.validate('-1 1')).toBeFalsy();
    });

    it(`should validate x less than 50`, async () => {
      expect(await gridParser.validate('100 1')).toBeFalsy();
    });

    it(`should validate y bigger than 0`, async () => {
      expect(await gridParser.validate('1 -1')).toBeFalsy();
    });

    it(`should validate y less than 50`, async () => {
      expect(await gridParser.validate('1 100')).toBeFalsy();
    });

    it(`should validate x less than 0 and y less than 0`, async () => {
      expect(await gridParser.validate('-1 -1')).toBeFalsy();
    });

    it(`should validate x less than 0 and y bigger that 50`, async () => {
      expect(await gridParser.validate('-1 100')).toBeFalsy();
    });

    it(`should validate x bigger than 50 and y less that 0`, async () => {
      expect(await gridParser.validate('100 -1')).toBeFalsy();
    });

    it(`should validate x bigger than 50 and y bigger that 50`, async () => {
      expect(await gridParser.validate('100 100')).toBeFalsy();
    });
  });
});
