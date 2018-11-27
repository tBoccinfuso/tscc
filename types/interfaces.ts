interface Person {
  name: string;
  age: number;

  // method that returns nothing
  whoAmI(): void
}

const InterfaceInstance: Person = {
  name: "thomas",
  age: 27,

  whoAmI() {
    console.log(`Hello, my name is ${name}. I am ${age} years old.`)
  }
}

// Call our whoAmI method to console.log who we are!
InterfaceInstance.whoAmI()