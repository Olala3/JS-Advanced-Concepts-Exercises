const number = 15;
let promise1 = new Promise ((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    } else {
        reject("error")
    }
});

promise1
    .then((val) => console.log(val))
    .catch((err) => console.error(err));