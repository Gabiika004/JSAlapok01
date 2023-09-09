const lista = [0, 7, 16, 30, 41];
const listBackwards = [];

function Backwards() {
  for (var i = lista.length - 1; i >= 0; i--) {
    listBackwards.push(lista[i]);
  }
}

function MakeString(list) {
  let text = "A lista elemei visszafelé a következők: ";
  let numbersAsString = "";
  for (var i = 0; i < list.length; i++) {
    if (i == list.length - 1) {
      numbersAsString += list[i] + " :)";
    } else {
      numbersAsString += list[i] + " ";
    }
  }

  console.log(text + numbersAsString);
}

Backwards();
console.log(listBackwards);
MakeString(listBackwards);
