"use strict";
var InterfaceInstance = {
    name: "thomas",
    age: 27,
    whoAmI: function () {
        console.log("Hello, my name is " + name + ". I am " + age + " years old.");
    }
};
// Call our whoAmI method to console.log who we are!
InterfaceInstance.whoAmI();
