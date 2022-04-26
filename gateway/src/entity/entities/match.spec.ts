import { cardinal_orientation } from './cardinal_orientation';
import { Coordinate } from './coordinate';
import { Match } from './match';
import { Position } from './position';
import { Robot } from './robot';

describe('match', () => {
  let match: Match;

  beforeEach(() => {
    match = new Match();
  });

  describe('Happy paths', () => {
    it(`should play`, async () => {
      match.play();
    });
  });
});
