function multiplyByTwo(num) {
    let number = 2;

    function inner() {
        return num * number
    }

    return inner;
  }


console.log(multiplyByTwo(4)());