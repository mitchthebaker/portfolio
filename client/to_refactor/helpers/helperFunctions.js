export const findArrayElByName = (array, name) => {
  return array.find((el) => {
    return el.name === name;
  });
};