// 02_04.js 는 다음과 같이 바꿔서 쓸 수 있음

const sayNode = function () {
  console.log("Node");
};

const es = "ES";

const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "Fantastic",
};

newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic