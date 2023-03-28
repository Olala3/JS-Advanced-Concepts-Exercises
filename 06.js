function printName() {
    let helloName = "Hello John"

    function inner() {
        return helloName
    }

    return inner
}

let inner = printName();
console.log(inner());