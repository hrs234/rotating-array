let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// left rotator
let leftRotateOne = arrData => {
  let a;
  let temp = arrData[0];
  for (a = 0; a <= arrData.length - 1; a++) {
    arrData[a] = arrData[a + 1];
  }
  arrData[a - 1] = temp;
};

// right rotator
let rightRotateOne = arrData => {
  let a;
  let temp = arrData[arrData.length - 1];
  for (a = arrData.length - 1; a >= 0; a--) {
    arrData[a] = arrData[a - 1];
  }
  arrData[0] = temp;
};

let rotator = (mode, many) => {
  for (let rotate = 0; rotate < many; rotate++) {
    if (mode === "right") {
      rightRotateOne(data);
    } else {
      leftRotateOne(data);
    }
  }
};

// rotator([MODE = "left" || "right"], [MANY = (integers)])
rotator("left", 1);
console.log("DATA: ", data);
