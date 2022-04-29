// Arrow functions

// function sum(a, b) {
//   return parseFloat(a) + parseFloat(b);
// }

// let sum = (a, b) => {
//   return parseFloat(a) + parseFloat(b);
// };

let sum = (a, b) => parseFloat(a) + parseFloat(b);

function showMessage(msg) {
  alert(msg);
}

// function setResultInPage(result) {
//   let resultSection = document.querySelector('.result-section');
//   resultSection.removeAttribute('hidden');
//   let h1 = resultSection.children[0];
//   h1.innerHTML = result;
// }

const setResultInPage = (result) => {
  let resultSection = document.querySelector('.result-section');
  resultSection.removeAttribute('hidden');
  let h1 = resultSection.children[0];
  h1.innerHTML = result;
};

function getInputFrom(inputId) {
  return document.getElementById(inputId).value;
}

let counter = 0;

const incrementCounter = function (i) {
  return (counter += i);
};

// const incrementCounter = (i) => (counter += i);

// function incrementCounter(i) {
//   return (counter += i);
// }

function doAction() {
  // let n1 = getInputFrom('input1');
  // let n2 = getInputFrom('input2');
  // setResultInPage(sum(n1, n2));
  //setResultInPage(showMessage(sum(n1, n2)));
  // let counter = { name: 'yosef' };
  // let copyCounter = counter;
  // counter = { name: 'ivan' };
  // setResultInPage(JSON.stringify(copyCounter));
  let x = incrementCounter(5);
  setResultInPage(x);
}

setResultInPage(counter);
