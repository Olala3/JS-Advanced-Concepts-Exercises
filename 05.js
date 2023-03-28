const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  

const person2 = person1;
person2.firstName = "Simon";
  
  // Modify the property `firstName` of the `person2` in "Simon".
  
console.log(person1);
console.log(person2);

/* person1 and person2 have the same first name, cuz we used the assignment
operator, which give them same values */
  