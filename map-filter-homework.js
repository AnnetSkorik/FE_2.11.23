// 1. отфильтровать нечетные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter((el) => el % 2 == 1));

// 2. Отфильтровать строки длинее 5 символов
const words = ["apple", "cat", "banana", "dog", "elephant", "car", "bat"];
const lengthWord = words.filter((element) => element.length > 5);
console.log(lengthWord);

// 3. Оставить только строки
const mixedTypes = [
  123,
  "apple",
  { fruit: "apple" },
  "banana",
  true,
  "car",
  false,
];
const onlyStrings = mixedTypes.filter((el) => typeof el === "string");
console.log(onlyStrings);

// 4. Офильтровать строки которые начинаются на a
const words4 = ["apple", "banana", "apricot", "grape", "avocado", "kiwi"];
console.log(words4.filter((el) => el[0] == "a"));

//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];

console.log(words3.filter((el) => el[0] == "e"));
console.log(words3.filter((el) => el[1] == "e"));
console.log(words3.filter((el) => el[2] == "e"));
console.log(words3.filter((el) => el[3] == "e"));
console.log(words3.filter((el) => el[4] == "e"));
console.log(words3.filter((el) => el[5] == "e"));

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 78 },
  { name: "Doe", grade: 90 },
  { name: "Smith", grade: 76 },
  { name: "Chris", grade: 81 },
];
for (let i = 0; i < students.length; i++) {
  for (let key in students[i]) {
    if (students[i].grade > 80) {
      console.log(students[i].grade);
    }
  }
}

// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8];
const countItems = {};
for (const item of duplicates) {
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.dir(result);

// 2.1 Добавить восклицательный знак в конце каждого слова
const words2 = ["hello", "world", "javascript"];
const addExclamationSign = (arr) =>
  arr.map((element) => element.slice(0) + "!");

console.log(addExclamationSign(words2));

// 2.2  Добавить нумерацию каждого слова 1. Apple etc.
const words1 = ["apple", "banana", "cherry"];
for (let i = 0; i < words1.length; i++) {
  words1[i] = i + 1 + "." + words1[i];
}
console.log(words1.join("\n"));

// 2.3 Сделать все числа положительными
const numbers3 = [1, -2, 3, -4, 5];
numbers3.forEach((element, index, array) => {
  if (element > 0) {
    console.log(element * 1);
  } else {
    console.log(element * -1);
  }
});
// 2.4 Сделать каждое число строкой
const numbers4 = [5, 10, 15, 20];
const newSrting = numbers4.toString();
console.log(newSrting);

// 2.5 Умножить каждый элемент на его индекс
const numbers5 = [1, 2, 3, 4, 5];
numbers5.forEach((element, index, array) => {
  console.log(element * index);
});

// 2.6 Прибавить к числу 10 если его индекс кратен 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers6.forEach((element, index, array) => {
  if (index % 3 === 0) {
    console.log(element + 10);
  }
});
