//your JS code here. If required.
function manipulateData(numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);
  })
  .then((numbers) => {
    // filter out odd numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // multiply even numbers by 2
    const result = evenNumbers.map(num => num * 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, 2000);
    });
  });
}

const outputElement = document.getElementById("output");
const inputArray = [1, 2, 3, 4];

manipulateData(inputArray).then((result) => {
  outputElement.textContent = result.join(", ");
});

