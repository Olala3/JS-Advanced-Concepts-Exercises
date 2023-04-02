function repeatHello(callback) {
    let cb = setInterval(callback, 1000);

    setTimeout(() => {
        clearInterval(cb);
        console.log('Hello');
    }, 5000);
}

function printHello() {
    console.log('Hello');
}

repeatHello(printHello);