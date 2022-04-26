import { MathHelper } from './math.helper';

describe('math helper', () => {
  describe('Happy paths', () => {
    it(`should convert 0 degree`, async () => {
      expect(MathHelper.convertDegreeToRadians(0)).toBeCloseTo(0);
    });
    it(`should convert 90 degree`, async () => {
      expect(MathHelper.convertDegreeToRadians(90)).toBeCloseTo(1.5708);
    });
    it(`should convert 180 degree`, async () => {
      expect(MathHelper.convertDegreeToRadians(180)).toBeCloseTo(3.14159);
    });
    it(`should convert 270 degree`, async () => {
      expect(MathHelper.convertDegreeToRadians(270)).toBeCloseTo(4.71239);
    });
    it(`should convert 360 degree`, async () => {
      expect(MathHelper.convertDegreeToRadians(360)).toBeCloseTo(6.28319);
    });
  });
});
