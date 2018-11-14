export const sum = args =>
  args.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0);

export const multiply = args =>
  args.reduce((accumulator, currentValue) => parseInt(accumulator) * parseInt(currentValue), 1);
