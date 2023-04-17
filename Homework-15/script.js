// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let length = prompt(`Enter the length of array: `);

while (length < 4 || isNaN(length)) {
    length = prompt(`Enter the length of array: `);
}

let arr = [];

for (let i = 0; i < length; i++) {
    let temp = prompt(`Enter your ${i + 1} value: `);
    arr.push(temp);
}

console.log('Array: ', arr);

arr.sort((a, b) => {
    const first = a.toUpperCase();
    const sec = b.toUpperCase();

    if(first < sec) {
        return -1;
    }

    if(first > sec) {
        return 1;
    }
})

console.log('Sorted array: ', arr);

arr.splice(1, 3);

console.log('Modified array: ', arr);