function printAsyncName(callback, name) {
    const cb = setInterval (callback, 1000);

    setTimeout(() => {
        clearInterval(cb);
        console.log(name);
     }, 2000);
}

function sayHello(){
    console.log('Hello');
}

printAsyncName(sayHello, 'Mario') ;
  