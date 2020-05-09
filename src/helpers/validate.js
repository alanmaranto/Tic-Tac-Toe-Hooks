const threePlaceCheck = (item1, item2, item3) => {
  // Check if they are not 0

  if (item1 === 0 || item2 === 0 || item3 === 0) {
    return {
      match: false,
    };
  }

  // Check if they match
  if (item1 === item2 && item2 === item3) {
    return {
      match: true,
      char: item1,
    };
  }

  return {
    match: false,
  };
};

export const checkIfMatch = (grid) => {
  let isMatched;
  // Horizontal [00,01,02]
  isMatched = threePlaceCheck(grid[0][0], grid[0][1], grid[0][2]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Horizontal [10,11,12]
  isMatched = threePlaceCheck(grid[1][0], grid[1][1], grid[1][2]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Horizontal [20,21,22]
  isMatched = threePlaceCheck(grid[2][0], grid[2][1], grid[2][2]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Vertical [00,10,20]
  isMatched = threePlaceCheck(grid[0][0], grid[1][0], grid[2][0]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Vertical [01,11,21]
  isMatched = threePlaceCheck(grid[0][1], grid[1][1], grid[2][1]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Vertical [02,12,22]
  isMatched = threePlaceCheck(grid[0][2], grid[1][2], grid[2][2]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Diagonal [00,11,22]
  isMatched = threePlaceCheck(grid[0][0], grid[1][1], grid[2][2]);
  if (isMatched.match === true) {
    return isMatched;
  }

  // Diagonal [20,11,02]
  isMatched = threePlaceCheck(grid[2][0], grid[1][1], grid[0][2]);
  if (isMatched.match === true) {
    return isMatched;
  }

  return false;
};

export const checkIfArrayFilled = (grid) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
};

export default checkIfMatch;
