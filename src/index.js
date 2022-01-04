const dataToParse = `"Id","UserName"
"1","Sam Smith"
"2","Fred Frankly"
"1","Zachary Zupers"
"3","Don lama"`;

const converted = [];
let converedObj = {};
const dataSplit = [];

let word = "";
for (let index = 0; index < dataToParse.length; index++) {
  if (dataToParse[index] === "\n") {
    dataSplit.push(word);
    word = "";
  }
  if (index === dataToParse.length - 1) {
    dataSplit.push(word);
  }
  word += dataToParse[index];
}

const [dataSplitTop, dataSplitRest] = [
  dataSplit[0].split(","),
  dataSplit.map((data) => {
    const ret = data.split(/,|\n/);
    ret.shift();
    return ret;
  }),
];
dataSplitRest.shift();

for (let index = 0; index < dataSplitRest.length; index++) {
  for (let indexJ = 0; indexJ < dataSplitRest[index].length; indexJ++) {
    converedObj[dataSplitTop[indexJ]] = dataSplitRest[index][indexJ];
  }
  converted.push(converedObj);
  converedObj = {};
}
