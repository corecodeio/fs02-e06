let a1 = ['Yosef', 'loreM Ipsum', 'LoReM iPsum', 'LOREM IPSUM', 'Ivan'];

const setResultInPage = (result) => {
  let resultSection = document.querySelector('.result-section');
  resultSection.removeAttribute('hidden');
  let h1 = resultSection.children[0];
  h1.innerHTML = result;
};

function transformer(str) {
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
}

function doAction() {
  //let a2 = [];
  // let statement = '';
  // for (let i = 0; i < a1.length; i++) {
  //   statement = a1[i].toLowerCase();
  //   a2.push(transformer(statement));
  // }

  // let a2 = a1
  //   .reverse()
  //   .map(
  //     (str) =>
  //       `${str
  //         .slice(1)
  //         .toLowerCase()}${str[0].toUpperCase()}${str[0].toUpperCase()}`
  //   );

  let a2 = [...a1].reverse().map((str) => {
    let firstChar = str[0];
    let restOfTheStatement = str.slice(1);
    return firstChar + restOfTheStatement;
  });

  //setResultInPage(a2.join('<br>'));

  let a3 = a1.map((str) => {
    let firstChar = str[0];
    let restOfTheStatement = str.slice(1);
    return firstChar + restOfTheStatement;
  });

  let a4 = a1.map(transformer);

  setResultInPage(a4.join('<br>'));
}
