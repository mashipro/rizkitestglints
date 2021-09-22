const input1 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

const removeIsland = (input) => {
  const newXY = [];
  const black = [];

  const boundaryCheck = (dataset, x, y) => {
    const xyBound = {
      x1: true,
      x2: true,
      y1: true,
      y2: true,
    };
    if (x - 1 < 0) {
      xyBound.x1 = false;
    }
    if (x + 2 > dataset.length) {
      xyBound.x2 = false;
    }
    if (y - 1 < 0) {
      xyBound.y1 = false;
    }
    if (y + 2 > dataset.length) {
      xyBound.y2 = false;
    }
    return xyBound;
  };

  const isBlack = (x, y) => {
    const items = input[y][x];
    return items == 1;
  };

  for (let yIndex = 0; yIndex < input.length; yIndex++) {
    const xArray = input[yIndex];
    const newXArray = xArray;
    for (let xIndex = 0; xIndex < xArray.length; xIndex++) {
      const item = xArray[xIndex];
      if (item === 1) {
        const boundCheck = boundaryCheck(input, xIndex, yIndex);
        newXArray[xIndex] = 0;
        if (boundCheck.x1) {
          if (isBlack(xIndex - 1, yIndex)) {
            newXArray[xIndex] = 1;
          }
        }
        if (boundCheck.x2) {
          if (isBlack(xIndex + 1, yIndex)) {
            newXArray[xIndex] = 1;
          }
        }
        if (boundCheck.y1) {
          if (isBlack(xIndex, yIndex - 1)) {
            newXArray[xIndex] = 1;
          }
        }
        if (boundCheck.y2) {
          if (isBlack(xIndex, yIndex + 1)) {
            newXArray[xIndex] = 1;
          }
        }
      } else {
      }
    }
    newXY.push(newXArray);
  }
  return newXY;
};

removeIsland(input1).forEach((element) => {
  console.log(element);
});

const generateInput = (removeIsland, count, maxLength = 5, min = 5) => {
  if (maxLength < 5) {
    console.error("max length need to be more than 5");
    return;
  }
  for (let i = 0; i < count; i++) {
    const inputNumber = i + 1;
    const randomLength = Math.floor(
      Math.random() * (maxLength < 5 ? 5 : maxLength - min) + min
    );
    console.log(
      "input number:",
      inputNumber,
      "generating maps with length:",
      randomLength
    );
    const randomInput = [];
    for (let y = 0; y < randomLength; y++) {
      const element = [];
      for (let x = 0; x < randomLength; x++) {
        element.push(Math.floor(Math.random() * 2));
      }
      randomInput.push(element);
    }
    console.log("input number:", inputNumber, randomInput);
    console.log("input number:", inputNumber, removeIsland(randomInput));
    // removeIsland(randomInput)
  }
};

generateInput(removeIsland, 5, 8);
