function repeatHello(callback) {
    setInterval(() => {
      callback();
    }, 1000);
  }
  
  const printHello = () => {
    console.log("Hello");
  }
  
  repeatHello(printHello);

  //I think the arrow function make the code easier to write and read.
  