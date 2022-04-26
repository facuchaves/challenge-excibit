export const cardinal_orientation = {
  0: 'E',
  90: 'N',
  180: 'W',
  270: 'S',
  360: 'E',
};

export const getAngleByCardinal = (cardinal) => {
  return parseInt(getKeyByValue(cardinal_orientation, cardinal));
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};
