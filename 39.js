const promise1 = (isLogged) => {
    return new Promise ((resolve, reject) => {
    if (isLogged) {
        const rand = Math.random()
        resolve(rand)
    } else {
        reject(new Error("error"))
    }
})
}

const promise2 = (num) => {
return new Promise ((resolve, reject) => {
    if (num > 0.5) {
        const data = {name: "John", age: 24}
        resolve(data)
    } else {
        reject(new Error("another error"))
    }
})
}

const isLogged = true;
promise1(isLogged)
.then((rand) => {
    console.log(rand)
    return promise2(rand)
})
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => console.log("Promise chain completed"))