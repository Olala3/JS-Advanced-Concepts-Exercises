function repeatHello(callback) {
    let cb = setInterval(() => {
        callback();
      }, 1000);

    setTimeout(() => {
        clearInterval(cb);
        console.log('Hello');
    }, 5000);
}

const printHello = () => {
    console.log("Hello");
  }

repeatHello(printHello);