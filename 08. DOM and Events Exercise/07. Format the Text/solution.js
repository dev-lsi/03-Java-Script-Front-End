function solve() {

  const sentences = extractSentences();
  const triplets = makeTriplets(sentences);
  const output = document.querySelector('#output');

  triplets.forEach(triplet => {

    const newP = createP(triplet);
    output.innerHTML += newP;
    
  });


};

function makeTriplets(input) {


  const arr = [];

  while (input.length > 0) {

    arr.push(input.splice(0, 3).join(''));

  }

  return arr;


}


function createP(text) {
  return `<p>${text}</p>`;
}


function extractSentences() {
  const text = document.querySelector('#input').value;
  const rowSentences = text.split('.');
  const sentences = [];

  rowSentences.forEach(sentence => {
    trimed = sentence.trim();

    trimed += '.';

    if (sentence.length > 1) {

      sentences.push(trimed);

    }

  });

  return sentences;
}



