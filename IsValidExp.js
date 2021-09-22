//1630 start
//1655 finish;
const symbolOpen = ["(", "{", "["];
const symbolClose = [")", "}", "]"];

const isValidExpression = (params) => {
  const validity = checkValidity(params);
  console.log(
    "test",
    params,
    "is",
    validity?.valid,
    "reason: ",
    validity?.reason
  );
};

const isValidLength = (params) => {
  return params?.length % 2 === 0;
};

const isValidOpening = (params) => {
  for (let i = 0; i < params.length / 2; i++) {
    const element = params[i];
    const isIncluded = symbolOpen.includes(element);
    if (!isIncluded) {
      return false;
    }
  }
  return true;
};

const isValidClosing = (params) => {
  //   const flipArray = params.reverse();
//   const maxIndex = params.length - 1;
  for (let i = 0; i < params.length / 2; i++) {
    const element = params[i];
    const elementContrary = params[params.length - i - 1];
    if (symbolOpen.indexOf(element) !== symbolClose.indexOf(elementContrary)) {
      return false;
    }
  }
  return true;
};

const checkValidity = (params) => {
  if (!params) {
    return { valid: false, reason: "null data" };
  }
  if (!isValidLength(params)) {
    return { valid: false, reason: "length invalid" };
  }
  if (!isValidOpening(params)) {
    return { valid: false, reason: "opening invalid" };
  }
  // isValidClosing(params);
  if (!isValidClosing(params)) {
    return { valid: false, reason: "opening and closing unmatched" };
  }
  return { valid: true, reason: "test passed" };
};

isValidExpression("({[]})"); // true
isValidExpression("({[})"); // false
isValidExpression("{}{}"); //false
