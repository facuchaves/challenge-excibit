import { RobotParser } from './robot-parser';

describe('robot-parser', () => {
  let robotParser: RobotParser;

  beforeEach(() => {
    robotParser = new RobotParser();
  });

  describe('Happy paths', () => {
    it(`should validate a correct line`, async () => {
      expect(await robotParser.validate('1 1 E')).toBeTruthy();
    });
  });

  describe('Invalid cases', () => {
    it(`should validate a empty line`, async () => {
      expect(await robotParser.validate('')).toBeFalsy();
    });

    it(`should validate a line with more than 3 values`, async () => {
      expect(await robotParser.validate('1 1 E 0')).toBeFalsy();
    });

    it(`should validate a invalid number in line`, async () => {
      expect(await robotParser.validate('a 1 E')).toBeFalsy();
    });

    it(`should validate a invalid number second place in line`, async () => {
      expect(await robotParser.validate('1 a E')).toBeFalsy();
    });

    it(`should validate a invalid coordinate`, async () => {
      expect(await robotParser.validate('1 a K')).toBeFalsy();
    });
  });
});
