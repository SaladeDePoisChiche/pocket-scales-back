import * as data from '../data/scales.json'

export const getRandomScale  = (): string => {
  //This function is not yet random
  //TO DO: make this function random
  return data.scales[0].tone;
};
