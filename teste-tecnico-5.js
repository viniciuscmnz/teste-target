function inverteString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  

  console.log(inverteString('Estou animado para fazer parte do time!'));
  