export class Parser<T> {
  validate = async (line: string): Promise<boolean> => {
    return true;
  };

  parse = async (line: string): Promise<T> => {
    return;
  };
}
