import { valid_instructions } from './instruction-constants';
import { Parser } from './parser';

export class InstructionParser {
  validate = async (line: string) => {
    for (const character of line) {
      if (!valid_instructions.includes(character)) {
        return false;
      }
    }
    return true;
  };

  parse = async (line: string) => {
    for (const character of line) {
    }
  };
}
