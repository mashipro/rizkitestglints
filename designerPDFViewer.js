// 17.10 start;
// 17.22 finish;

const alphabetic = "abcdefghijklmnopqrstuvwxyz";

function designerPdfViewer(h, word) {
  if (h.length !== alphabetic.length) {
    console.log("length unmatched");
    return;
  }
  const wordLength = word.length;
  const initValue = alphabetic.indexOf(word[0]);
  const alphabetValue = h[initValue];
  const total = wordLength * alphabetValue;
  return total;
}

const result = (testStudent, testCase) => testStudent === testCase;

console.log(
  result(
    designerPdfViewer(
      [
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 7,
      ],
      "zaba"
    ),
    28
  )
);

console.log(
  result(
    designerPdfViewer(
      [
        5, 1, 2, 7, 1, 3, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 7,
      ],
      "daga"
    ),
    28
  )
);

console.log(
  result(
    designerPdfViewer(
      [
        5, 1, 2, 7, 1, 3, 1, 100, 2, 33, 5, 20, 119, 5, 5, 5, 20, 1, 17, 5, 12,
        5, 13, 88, 15, 77,
      ],
      "xhy"
    ),
    300
  )
);
